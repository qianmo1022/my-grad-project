"use client";
import CircleRadio from "../items/circle-radio";
import { useState } from "react";
import { CircleRadioProps } from "../../lib/definitions";

export const appearance: CircleRadioProps[] = [
  { color: "#d1d1d1", colorName: "陶瓷白", price: "价格已包含" },
  { color: "#010101", colorName: "鎏金黑", price: "价格已包含" },
  { color: "#3a3a3c", colorName: "深空灰", price: "价格已包含" },
  { color: "#ccc3bc", colorName: "暖星云", price: "+ ￥6000" },
  { color: "#7c9ea7", colorName: "碧波青", price: "+ ￥6000" },
  { color: "#63516e", colorName: "幻影紫", price: "+ ￥6000" },
  { color: "#657688", colorName: "晴光蓝", price: "+ ￥6000" },
  { color: "#aa0206", colorName: "大都会红", price: "+ ￥6000 | 含黑曜套件" },
];

export default function Appearance() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(5);
  const [selectedInfo, setSelectedInfo] = useState<CircleRadioProps  | null>({ color: "#63516e", colorName: "幻影紫", price: "+ ￥6000" });

  const handleRadioChange = (index: number) => {
    setSelectedIndex(index);
    setSelectedInfo(appearance[index]);
  };

  return (
    <div className="flex flex-col">
      <p className="text-xl my-4">外观</p>
      {selectedInfo && (
        <div className="flex place-content-between font-thin">
          <p className="text-base">{selectedInfo.colorName}</p>
          <p className="text-base">{selectedInfo.price}</p>
        </div>
      )}
      <div className="flex flex-wrap">
        {appearance.map((item, index) => {
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
