"use client";
import CircleRadio from "../items/circle-radio";
import { useState } from "react";
import { CircleRadioProps } from "../../lib/definitions";

export const interior: CircleRadioProps[] = [
  { color: "#c7c2ba", colorName: "白沙杏", price: "价格已包含" },
  { color: "#aa9783", colorName: "琥珀棕", price: "价格已包含" },
  { color: "#8d3d41", colorName: "雀羽红", price: "+ ￥6000" },
  { color: "#716158", colorName: "松露粽", price: "+ ￥6000" },
];

export default function Interior() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(0);
  const [selectedInfo, setSelectedInfo] = useState<CircleRadioProps  | null>({ color: "#c7c2ba", colorName: "白沙杏", price: "价格已包含" });

  const handleRadioChange = (index: number) => {
    setSelectedIndex(index);
    setSelectedInfo(interior[index]);
  };

  return (
    <div className="flex flex-col">
      <p className="text-xl my-4">内饰</p>
      {selectedInfo && (
        <div className="flex place-content-between font-thin">
          <p className="text-base">{selectedInfo.colorName}</p>
          <p className="text-base">{selectedInfo.price}</p>
        </div>
      )}
      <div className="flex flex-wrap">
        {interior.map((item, index) => {
          const isSelected = selectedIndex === index;
          return (
            <CircleRadio
              key={index}
              info={item}
              isSelected={isSelected}
              onChange={() => handleRadioChange(index)}
            />
          );
        })}
      </div>
    </div>
  );
}
