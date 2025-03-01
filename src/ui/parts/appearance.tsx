"use client";
import CircleRadio from "../items/circle-radio";
import { useState } from "react";

export const appearance: string[] = [
  "#d1d1d1",
  "#010101",
  "#3a3a3c",
  "#ccc3bc",
  "#7c9ea7",
  "#63516e",
  "#657688",
  "#aa0206",
];

export default function Appearance() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleRadioChange = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <div className="flex flex-col">
      <div>
        <p className="text-2xl my-4">外观</p>
      </div>
      <div className="flex flex-wrap">
      {appearance.map((item, index) => {
        const isSelected = selectedIndex === index;
        return (
          <CircleRadio
            key={index}
            color={item}
            isSelected={isSelected}
            onChange={() => handleRadioChange(index)}
          />
        );
      })}
      </div>
    </div>
  );
}
