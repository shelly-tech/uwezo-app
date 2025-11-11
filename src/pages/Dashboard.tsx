import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, TrendingUp, Activity } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts";

// Mock data for demonstration
const moodData = [
  { date: "Mon", mood: 4, stress: 3 },
  { date: "Tue", mood: 3, stress: 5 },
  { date: "Wed", mood: 5, stress: 2 },
  { date: "Thu", mood: 4, stress: 4 },
  { date: "Fri", mood: 5, stress: 2 },
  { date: "Sat", mood: 4, stress: 3 },
  { date: "Sun", mood: 5, stress: 1 },
];

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-secondary/10">
      <div className="container max-w-6xl mx-auto p-6 space-y-8">
        {/* Header */}
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

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6 bg-card/80 backdrop-blur-sm border-primary/20 shadow-lg">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-full bg-primary/10">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">7-Day Average</p>
                <p className="text-2xl font-bold text-foreground">4.3 / 5</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-card/80 backdrop-blur-sm border-secondary/20 shadow-lg">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-full bg-secondary/10">
                <Activity className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Stress Level</p>
                <p className="text-2xl font-bold text-foreground">Low</p>
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
                <p className="text-2xl font-bold text-foreground">7 days</p>
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
            <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
              <p className="text-sm text-foreground">
                <span className="font-semibold">Great progress!</span> Your mood has been consistently positive this week. Keep up the good work! 🌟
              </p>
            </div>
            <div className="p-4 rounded-lg bg-secondary/5 border border-secondary/20">
              <p className="text-sm text-foreground">
                <span className="font-semibold">Stress management:</span> Your stress levels are trending downward. Consider maintaining your current coping strategies.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
