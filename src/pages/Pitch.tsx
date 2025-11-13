import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Heart, Brain, MessageCircle, TrendingUp, Users, Shield, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Pitch = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const slides = [
    {
      title: "UWEZO APP",
      subtitle: "Empowering Mental Wellness Through Technology",
      icon: Heart,
      content: (
        <div className="text-center space-y-6">
          <div className="inline-flex p-6 rounded-full bg-primary/10 mb-4">
            <Heart className="h-16 w-16 text-primary" />
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            UWEZO APP
          </h1>
          <p className="text-2xl text-muted-foreground max-w-2xl mx-auto">
            Empowering Mental Wellness Through Technology
          </p>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            A comprehensive mental health platform that combines mood tracking, AI-powered insights, and professional counselor support
          </p>
        </div>
      ),
    },
    {
      title: "The Problem",
      subtitle: "Mental Health Crisis",
      icon: Brain,
      content: (
        <div className="space-y-8">
          <div className="text-center mb-8">
            <Brain className="h-12 w-12 text-destructive mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-foreground mb-4">The Mental Health Crisis</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-destructive/20">
              <div className="text-4xl font-bold text-destructive mb-2">1 in 4</div>
              <p className="text-muted-foreground">people worldwide experience mental health issues annually</p>
            </Card>
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-destructive/20">
              <div className="text-4xl font-bold text-destructive mb-2">60%</div>
              <p className="text-muted-foreground">don&apos;t seek help due to stigma or lack of access</p>
            </Card>
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-destructive/20">
              <div className="text-4xl font-bold text-destructive mb-2">$1T</div>
              <p className="text-muted-foreground">annual global economic cost of mental health conditions</p>
            </Card>
          </div>
          <p className="text-center text-lg text-muted-foreground max-w-2xl mx-auto mt-8">
            Traditional mental health services are often inaccessible, expensive, and stigmatized. People need convenient, private, and affordable support.
          </p>
        </div>
      ),
    },
    {
      title: "Our Solution",
      subtitle: "Comprehensive Mental Wellness Platform",
      icon: Heart,
      content: (
        <div className="space-y-8">
          <div className="text-center mb-8">
            <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-foreground mb-4">UWEZO APP Solution</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A privacy-first mental wellness platform that makes support accessible to everyone
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Daily Mood Tracking</h3>
                  <p className="text-muted-foreground">Log emotions and stress levels with intuitive emoji selectors and sliders</p>
                </div>
              </div>
            </Card>
            <Card className="p-6 bg-gradient-to-br from-secondary/10 to-accent/10 border-secondary/20">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-secondary/10">
                  <Brain className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">AI-Powered Insights</h3>
                  <p className="text-muted-foreground">Get personalized emotional feedback and coping strategies</p>
                </div>
              </div>
            </Card>
            <Card className="p-6 bg-gradient-to-br from-accent/10 to-primary/10 border-accent/20">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-accent/10">
                  <TrendingUp className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Visual Analytics</h3>
                  <p className="text-muted-foreground">Track patterns and trends in your emotional wellness journey</p>
                </div>
              </div>
            </Card>
            <Card className="p-6 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <MessageCircle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Professional Support</h3>
                  <p className="text-muted-foreground">Connect with certified counselors through secure live chat</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      ),
    },
    {
      title: "Market Opportunity",
      subtitle: "Growing Demand",
      icon: TrendingUp,
      content: (
        <div className="space-y-8">
          <div className="text-center mb-8">
            <TrendingUp className="h-12 w-12 text-accent mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-foreground mb-4">Market Opportunity</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-6">
              <Card className="p-6 bg-gradient-to-br from-accent/10 to-primary/10">
                <div className="text-3xl font-bold text-accent mb-2">$537.97B</div>
                <p className="text-lg font-semibold mb-2">Global Mental Health Market by 2030</p>
                <p className="text-sm text-muted-foreground">Growing at 6.17% CAGR</p>
              </Card>
              <Card className="p-6 bg-gradient-to-br from-primary/10 to-secondary/10">
                <div className="text-3xl font-bold text-primary mb-2">320M+</div>
                <p className="text-lg font-semibold mb-2">Global Digital Health Users</p>
                <p className="text-sm text-muted-foreground">Rapidly increasing adoption</p>
              </Card>
            </div>
            <div className="space-y-6">
              <Card className="p-6 bg-gradient-to-br from-secondary/10 to-accent/10">
                <h3 className="text-xl font-semibold mb-4">Target Markets</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Young adults (18-35) seeking accessible mental health support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Professionals managing workplace stress and burnout</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Individuals in areas with limited mental health services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Organizations investing in employee wellness programs</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Business Model",
      subtitle: "Sustainable Revenue Streams",
      icon: TrendingUp,
      content: (
        <div className="space-y-8">
          <div className="text-center mb-8">
            <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-foreground mb-4">Revenue Model</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
              <div className="text-center space-y-4">
                <div className="inline-flex p-4 rounded-full bg-primary/10">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Freemium</h3>
                <p className="text-sm text-muted-foreground">Free basic mood tracking + Premium features</p>
                <div className="pt-4 border-t border-border/50">
                  <div className="text-2xl font-bold text-primary mb-1">$9.99/mo</div>
                  <p className="text-xs text-muted-foreground">Premium subscription</p>
                </div>
              </div>
            </Card>
            <Card className="p-6 bg-gradient-to-br from-secondary/10 to-primary/10 border-secondary/20">
              <div className="text-center space-y-4">
                <div className="inline-flex p-4 rounded-full bg-secondary/10">
                  <MessageCircle className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold">Counselor Sessions</h3>
                <p className="text-sm text-muted-foreground">Pay-per-session or subscription packages</p>
                <div className="pt-4 border-t border-border/50">
                  <div className="text-2xl font-bold text-secondary mb-1">$49-99</div>
                  <p className="text-xs text-muted-foreground">Per counselor session</p>
                </div>
              </div>
            </Card>
            <Card className="p-6 bg-gradient-to-br from-accent/10 to-secondary/10 border-accent/20">
              <div className="text-center space-y-4">
                <div className="inline-flex p-4 rounded-full bg-accent/10">
                  <Shield className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold">B2B Enterprise</h3>
                <p className="text-sm text-muted-foreground">Workplace wellness programs for companies</p>
                <div className="pt-4 border-t border-border/50">
                  <div className="text-2xl font-bold text-accent mb-1">Custom</div>
                  <p className="text-xs text-muted-foreground">Enterprise pricing</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      ),
    },
    {
      title: "Competitive Advantage",
      subtitle: "What Sets Us Apart",
      icon: Shield,
      content: (
        <div className="space-y-8">
          <div className="text-center mb-8">
            <Shield className="h-12 w-12 text-accent mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Competitive Edge</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="p-6 bg-gradient-to-br from-primary/10 to-accent/10">
              <h3 className="text-xl font-semibold mb-3 text-primary">Privacy-First Design</h3>
              <p className="text-muted-foreground">End-to-end encryption and strict data privacy policies. Your mental health data belongs only to you.</p>
            </Card>
            <Card className="p-6 bg-gradient-to-br from-secondary/10 to-primary/10">
              <h3 className="text-xl font-semibold mb-3 text-secondary">Hybrid AI + Human Support</h3>
              <p className="text-muted-foreground">Combines AI-powered insights with certified counselor access for comprehensive support.</p>
            </Card>
            <Card className="p-6 bg-gradient-to-br from-accent/10 to-secondary/10">
              <h3 className="text-xl font-semibold mb-3 text-accent">Affordable Accessibility</h3>
              <p className="text-muted-foreground">Freemium model makes mental health support accessible to everyone, regardless of income.</p>
            </Card>
            <Card className="p-6 bg-gradient-to-br from-primary/10 to-secondary/10">
              <h3 className="text-xl font-semibold mb-3 text-primary">Holistic Approach</h3>
              <p className="text-muted-foreground">Tracks mood, stress, journaling, and provides visual analytics for comprehensive wellness insights.</p>
            </Card>
          </div>
        </div>
      ),
    },
    {
      title: "Join Our Journey",
      subtitle: "Building the Future of Mental Wellness",
      icon: Heart,
      content: (
        <div className="text-center space-y-8">
          <div className="inline-flex p-6 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 mb-4">
            <Heart className="h-16 w-16 text-primary" />
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Join Our Journey
          </h2>
          <p className="text-2xl text-muted-foreground max-w-2xl mx-auto">
            Help us make mental wellness accessible to everyone
          </p>
          <div className="space-y-4 pt-8">
            <Button
              size="lg"
              className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
              onClick={() => navigate("/auth")}
            >
              Try UWEZO APP Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <p className="text-sm text-muted-foreground">
              Free to start • No credit card required
            </p>
          </div>
          <div className="pt-8 space-y-3 text-muted-foreground">
            <p>Contact us for investment opportunities</p>
            <p className="text-sm">info@uwezoapp.com</p>
          </div>
        </div>
      ),
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-secondary/10">
      {/* Header */}
      <div className="border-b border-border/50 bg-card/50 backdrop-blur-sm">
        <div className="container max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              UWEZO APP
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">
              Slide {currentSlide + 1} of {slides.length}
            </span>
            <Button
              variant="outline"
              onClick={() => navigate("/")}
            >
              Launch App
            </Button>
          </div>
        </div>
      </div>

      {/* Slide Content */}
      <div className="container max-w-7xl mx-auto px-6 py-12">
        <Card className="min-h-[600px] bg-card/80 backdrop-blur-sm shadow-2xl p-12">
          <div className="animate-in fade-in duration-500">
            {slides[currentSlide].content}
          </div>
        </Card>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-8">
          <Button
            variant="outline"
            size="lg"
            onClick={prevSlide}
            disabled={currentSlide === 0}
          >
            <ChevronLeft className="h-5 w-5 mr-2" />
            Previous
          </Button>

          {/* Dots Indicator */}
          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentSlide
                    ? "w-8 bg-primary"
                    : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="lg"
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
          >
            Next
            <ChevronRight className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Pitch;
