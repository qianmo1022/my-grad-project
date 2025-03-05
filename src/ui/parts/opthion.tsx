'use client'
import RecRadio from "../items/rec-radio";
import { RecRadioProps } from "../../lib/definitions";
import { useState } from 'react';
import Image from "next/image";

export const options: RecRadioProps[] = [
    { title: "无科技智享包", description: "价格已包含" },
    { title: "有科技智享包", description: ["+ ￥15000","含主驾肩枕音响、主驾座椅按摩、后排座椅通风加热按摩、后排星光触控黑带、冷藏和保温双用车载冰箱"] },
];

export default function Option() {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(0);

    const handleRadioChange = (index: number) => {
        setSelectedIndex(index);
    };

    return (
        <div className="flex flex-col">
            <p className="text-xl my-4">选装</p>
            {selectedIndex === 0 && (
                <div className="mx-auto w-[80%] h-[10vh] px-[10%] relative">
                <Image
                    src={"/seat.jpg"}
                    fill
                    className="object-cover"
                    alt="seat"
                />
                </div>
            )}
            {selectedIndex === 1 && (
                <div className="mx-auto w-[80%] h-[10vh] px-[10%] relative">
                <Image
                    src={"/clever-option.jpg"}
                    fill
                    className="object-cover"
                    alt="seat"
                />
                </div>
            )}
            {options.map((item, index) => {
                const isSelected = selectedIndex === index;
                return <RecRadio 
                    key={index} 
                    info={item}
                    isSelected={isSelected}
                    onChange={() => handleRadioChange(index)}
                /> 
            })}
        </div>
    );
}
