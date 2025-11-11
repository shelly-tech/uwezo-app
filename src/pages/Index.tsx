import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";
import { Heart, BarChart3, MessageCircle, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import MoodSelector from "@/components/MoodSelector";
import StressSlider from "@/components/StressSlider";

const Index = () => {
  const [mood, setMood] = useState<number | undefined>();
  const [stress, setStress] = useState(5);
  const [notes, setNotes] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = () => {
    if (!mood) {
      toast({
        title: "Please select your mood",
        description: "We need to know how you're feeling today",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Check-in saved! 🌟",
      description: "Your wellness data has been recorded",
    });

    // Reset form
    setMood(undefined);
    setStress(5);
    setNotes("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-secondary/10">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/50 backdrop-blur-sm">
        <div className="container max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-full bg-primary/10">
              <Heart className="h-6 w-6 text-primary" />
            </div>
            <h1 className="text-2xl font-bold text-foreground">UWEZO APP</h1>
          </div>
          <Button 
            variant="outline" 
            onClick={() => navigate("/dashboard")}
            className="gap-2 hover:bg-primary/10"
          >
            <BarChart3 className="h-4 w-4" />
            Dashboard
          </Button>
        </div>
      </header>

      <div className="container max-w-3xl mx-auto p-6 space-y-8 py-12">
        {/* Welcome Section */}
        <div className="text-center space-y-3 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <Sparkles className="h-4 w-4" />
            Your Mental Wellness Companion
          </div>
          <h2 className="text-4xl font-bold text-foreground">How are you today?</h2>
          <p className="text-muted-foreground text-lg">
            Take a moment to check in with yourself
          </p>
        </div>

        {/* Main Card */}
        <Card className="p-8 bg-card/80 backdrop-blur-sm shadow-xl border-primary/10">
          <div className="space-y-8">
            {/* Mood Selector */}
            <MoodSelector selected={mood} onSelect={setMood} />

            {/* Stress Slider */}
            <StressSlider value={stress} onChange={setStress} />

            {/* Notes */}
            <div className="space-y-3">
              <label className="text-lg font-semibold text-foreground">
                Anything on your mind? (Optional)
              </label>
              <Textarea
                placeholder="Share your thoughts, feelings, or what's happening in your life..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="min-h-32 resize-none border-border/50 focus:border-primary"
              />
            </div>

            {/* Submit Button */}
            <Button 
              onClick={handleSubmit} 
              className="w-full h-12 text-lg font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]"
              size="lg"
            >
              Save Check-in
            </Button>
          </div>
        </Card>

        {/* Help Button */}
        <Card className="p-6 bg-accent/10 border-accent/20 backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h3 className="font-semibold text-foreground flex items-center gap-2">
                <MessageCircle className="h-5 w-5 text-accent" />
                Need someone to talk to?
              </h3>
              <p className="text-sm text-muted-foreground">
                Connect with certified counselors via live chat
              </p>
            </div>
            <Button variant="secondary" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
              Get Help
            </Button>
          </div>
        </Card>

        {/* Footer Info */}
        <div className="text-center space-y-2">
          <p className="text-sm text-muted-foreground">
            🔒 Your data is private and secure
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
