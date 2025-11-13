-- Create role enum
CREATE TYPE public.app_role AS ENUM ('admin', 'counselor', 'user');

-- Create user_roles table
CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role public.app_role NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);

-- Enable RLS on user_roles
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- RLS policies for user_roles
CREATE POLICY "Users can view their own roles"
ON public.user_roles
FOR SELECT
USING (auth.uid() = user_id);

CREATE POLICY "Admins can manage all roles"
ON public.user_roles
FOR ALL
USING (
  EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = auth.uid() AND role = 'admin'
  )
);

-- Security definer function to check roles
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role public.app_role)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  )
$$;

-- Drop the old restrictive policy on counselor_chats
DROP POLICY IF EXISTS "Users can send messages" ON public.counselor_chats;

-- Create new policies for counselor_chats that allow both users and counselors
CREATE POLICY "Users can send their own messages"
ON public.counselor_chats
FOR INSERT
WITH CHECK (auth.uid() = user_id AND sender_type = 'user');

CREATE POLICY "Counselors can send counselor messages"
ON public.counselor_chats
FOR INSERT
WITH CHECK (public.has_role(auth.uid(), 'counselor') AND sender_type = 'counselor');

-- Add UPDATE policy for message editing by users
CREATE POLICY "Users can update their own messages"
ON public.counselor_chats
FOR UPDATE
USING (auth.uid() = user_id AND sender_type = 'user')
WITH CHECK (auth.uid() = user_id AND sender_type = 'user');

-- Add DELETE policy for privacy compliance
CREATE POLICY "Users can delete their own chat messages"
ON public.counselor_chats
FOR DELETE
USING (auth.uid() = user_id);

-- Add DELETE policy to profiles for GDPR compliance
CREATE POLICY "Users can delete their own profile"
ON public.profiles
FOR DELETE
USING (auth.uid() = user_id);

-- Trigger to automatically assign 'user' role to new signups
CREATE OR REPLACE FUNCTION public.handle_new_user_role()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.user_roles (user_id, role)
  VALUES (new.id, 'user');
  RETURN new;
END;
$$;

CREATE TRIGGER on_auth_user_created_role
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user_role();