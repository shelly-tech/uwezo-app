import { Button } from "@/components/ui/button";
import { useState } from "react";

const moods = [
  { emoji: "😊", label: "Happy", value: 5 },
  { emoji: "🙂", label: "Good", value: 4 },
  { emoji: "😐", label: "Neutral", value: 3 },
  { emoji: "😔", label: "Down", value: 2 },
  { emoji: "😢", label: "Sad", value: 1 },
];

interface MoodSelectorProps {
  onSelect: (mood: number) => void;
  selected?: number;
}

const MoodSelector = ({ onSelect, selected }: MoodSelectorProps) => {
  return (
    <div className="space-y-4">
      <label className="text-lg font-semibold text-foreground">How are you feeling today?</label>
      <div className="grid grid-cols-5 gap-3">
        {moods.map((mood) => (
          <Button
            key={mood.value}
            variant={selected === mood.value ? "default" : "outline"}
            onClick={() => onSelect(mood.value)}
            className={`h-20 flex flex-col items-center justify-center gap-2 transition-all hover:scale-105 ${
              selected === mood.value 
                ? "bg-primary text-primary-foreground shadow-lg scale-105" 
                : "hover:bg-primary/10 hover:border-primary/50"
            }`}
          >
            <span className="text-3xl">{mood.emoji}</span>
            <span className="text-xs font-medium">{mood.label}</span>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default MoodSelector;
