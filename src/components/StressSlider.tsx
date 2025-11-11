import { Slider } from "@/components/ui/slider";
import { useState } from "react";

interface StressSliderProps {
  value: number;
  onChange: (value: number) => void;
}

const StressSlider = ({ value, onChange }: StressSliderProps) => {
  const getStressLabel = (val: number) => {
    if (val <= 3) return "Low";
    if (val <= 6) return "Moderate";
    return "High";
  };

  const getStressColor = (val: number) => {
    if (val <= 3) return "text-stress-low";
    if (val <= 6) return "text-mood-neutral";
    return "text-stress-high";
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <label className="text-lg font-semibold text-foreground">Stress Level</label>
        <span className={`text-2xl font-bold ${getStressColor(value)}`}>
          {value} / 10 - {getStressLabel(value)}
        </span>
      </div>
      <Slider
        value={[value]}
        onValueChange={(vals) => onChange(vals[0])}
        max={10}
        min={0}
        step={1}
        className="w-full"
      />
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>No stress</span>
        <span>Very stressed</span>
      </div>
    </div>
  );
};

export default StressSlider;
