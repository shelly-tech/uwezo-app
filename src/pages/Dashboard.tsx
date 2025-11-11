import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, TrendingUp, Activity, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface MoodLog {
  mood_score: number;
  stress_level: number;
  created_at: string;
}

const Dashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [moodData, setMoodData] = useState<any[]>([]);
  const [avgMood, setAvgMood] = useState(0);
  const [avgStress, setAvgStress] = useState(0);
  const [checkInCount, setCheckInCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadMoodLogs();
  }, []);

  const loadMoodLogs = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate("/auth");
        return;
      }

      // Get last 7 days of mood logs
      const sevenDaysAgo = new Date();
      sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

      const { data, error } = await supabase
        .from("mood_logs")
        .select("*")
        .eq("user_id", session.user.id)
        .gte("created_at", sevenDaysAgo.toISOString())
        .order("created_at", { ascending: true });

      if (error) throw error;

      if (data && data.length > 0) {
        // Process data for charts
        const processedData = data.map((log: MoodLog) => ({
          date: new Date(log.created_at).toLocaleDateString('en-US', { weekday: 'short' }),
          mood: log.mood_score,
          stress: log.stress_level,
        }));

        setMoodData(processedData);
        
        // Calculate averages
        const totalMood = data.reduce((sum: number, log: MoodLog) => sum + log.mood_score, 0);
        const totalStress = data.reduce((sum: number, log: MoodLog) => sum + log.stress_level, 0);
        
        setAvgMood(Number((totalMood / data.length).toFixed(1)));
        setAvgStress(Number((totalStress / data.length).toFixed(1)));
        setCheckInCount(data.length);
      }
    } catch (error: any) {
      toast({
        title: "Error loading data",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/auth");
  };

  const getStressLabel = (stress: number) => {
    if (stress <= 3) return "Low";
    if (stress <= 6) return "Moderate";
    return "High";
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/20 to-secondary/10">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading your wellness data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-secondary/10">
      <div className="container max-w-6xl mx-auto p-6 space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => navigate("/")}
              className="rounded-full hover:bg-primary/10"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Your Wellness Journey</h1>
              <p className="text-muted-foreground">Track your emotional patterns over time</p>
            </div>
          </div>
          <Button 
            variant="ghost" 
            size="icon"
            onClick={handleLogout}
            className="hover:bg-destructive/10 hover:text-destructive"
          >
            <LogOut className="h-4 w-4" />
          </Button>
        </div>

        {moodData.length === 0 ? (
          <Card className="p-12 text-center bg-card/80 backdrop-blur-sm shadow-lg">
            <Activity className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-foreground mb-2">No data yet</h2>
            <p className="text-muted-foreground mb-6">
              Start logging your mood to see your wellness trends
            </p>
            <Button onClick={() => navigate("/")}>Log Your First Check-in</Button>
          </Card>
        ) : (
          <>
            {/* Stats Cards */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 bg-card/80 backdrop-blur-sm border-primary/20 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-full bg-primary/10">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Average Mood</p>
                    <p className="text-2xl font-bold text-foreground">{avgMood} / 5</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card/80 backdrop-blur-sm border-secondary/20 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-full bg-secondary/10">
                    <Activity className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Avg Stress</p>
                    <p className="text-2xl font-bold text-foreground">{getStressLabel(avgStress)}</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card/80 backdrop-blur-sm border-accent/20 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-full bg-accent/10">
                    <Activity className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Check-ins</p>
                    <p className="text-2xl font-bold text-foreground">{checkInCount} days</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Charts */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Mood Trend */}
              <Card className="p-6 bg-card/80 backdrop-blur-sm shadow-lg">
                <h2 className="text-xl font-semibold mb-4 text-foreground">Mood Trends</h2>
                <ResponsiveContainer width="100%" height={250}>
                  <AreaChart data={moodData}>
                    <defs>
                      <linearGradient id="colorMood" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" />
                    <YAxis domain={[0, 5]} stroke="hsl(var(--muted-foreground))" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: "hsl(var(--card))", 
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "0.5rem"
                      }} 
                    />
                    <Area 
                      type="monotone" 
                      dataKey="mood" 
                      stroke="hsl(var(--primary))" 
                      fill="url(#colorMood)"
                      strokeWidth={2}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </Card>

              {/* Stress Trend */}
              <Card className="p-6 bg-card/80 backdrop-blur-sm shadow-lg">
                <h2 className="text-xl font-semibold mb-4 text-foreground">Stress Levels</h2>
                <ResponsiveContainer width="100%" height={250}>
                  <LineChart data={moodData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" />
                    <YAxis domain={[0, 10]} stroke="hsl(var(--muted-foreground))" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: "hsl(var(--card))", 
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "0.5rem"
                      }} 
                    />
                    <Line 
                      type="monotone" 
                      dataKey="stress" 
                      stroke="hsl(var(--secondary))" 
                      strokeWidth={3}
                      dot={{ fill: "hsl(var(--secondary))", r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </Card>
            </div>

            {/* Insights */}
            <Card className="p-6 bg-card/80 backdrop-blur-sm shadow-lg">
              <h2 className="text-xl font-semibold mb-4 text-foreground">Weekly Insights</h2>
              <div className="space-y-3">
                {avgMood >= 4 && (
                  <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                    <p className="text-sm text-foreground">
                      <span className="font-semibold">Great progress!</span> Your mood has been consistently positive. Keep up the good work! 🌟
                    </p>
                  </div>
                )}
                {avgStress <= 5 && (
                  <div className="p-4 rounded-lg bg-secondary/5 border border-secondary/20">
                    <p className="text-sm text-foreground">
                      <span className="font-semibold">Stress management:</span> Your stress levels are well-managed. Consider maintaining your current coping strategies.
                    </p>
                  </div>
                )}
                {avgMood < 3 && (
                  <div className="p-4 rounded-lg bg-accent/5 border border-accent/20">
                    <p className="text-sm text-foreground">
                      <span className="font-semibold">Reach out:</span> Your mood has been lower recently. Consider talking to a counselor for support.
                    </p>
                  </div>
                )}
              </div>
            </Card>
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
