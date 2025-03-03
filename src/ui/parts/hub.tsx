"use client";
import CircleRadioImg from "../items/circle-radio-img";
import { useState } from "react";
import { CircleRadioImgProps } from "../../lib/definitions";

export const hub: CircleRadioImgProps[] = [
  { img: "/hub-20.png", name: "20英寸双五辐低风阻轮毂", price: "价格已包含"  },
  { img: "/hub-21.png", name: "21英寸双十辐高性能轮毂", price: "+ ￥10000"   },
];

export default function Hub() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(0);
  const [selectedInfo, setSelectedInfo] = useState<CircleRadioImgProps  | null>({ img: "/hub-20.png", name: "20英寸双五辐低风阻轮毂", price: "价格已包含"  });

  const handleRadioChange = (index: number) => {
    setSelectedIndex(index);
    setSelectedInfo(hub[index]);
  };

  return (
    <div className="flex flex-col">
      <p className="text-xl my-4">轮毂</p>
      {selectedInfo && (
        <div className="flex place-content-between font-thin">
          <p className="text-base">{selectedInfo.name}</p>
          <p className="text-base">{selectedInfo.price}</p>
        </div>
      )}
      <div className="flex flex-wrap">
        {hub.map((item, index) => {
          const isSelected = selectedIndex === index;
          return (
            <CircleRadioImg
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
