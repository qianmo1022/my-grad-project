'use client'
import RecRadio from "../items/rec-radio";
import { RecRadioProps } from "../../lib/definitions";
import { useState } from 'react';
import Image from "next/image";

export const seat: RecRadioProps[] = [
    { title: "无零重力座椅", description: "价格已包含" },
    { title: "有零重力座椅", description: "+ ￥10000" },
];

export default function Seat() {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(0);

    const handleRadioChange = (index: number) => {
        setSelectedIndex(index);
    };

    return (
        <div className="flex flex-col">
            <p className="text-xl my-4">座椅</p>
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
                    src={"/zero-g.jpg"}
                    fill
                    className="object-cover"
                    alt="seat"
                />
                </div>
            )}
            {seat.map((item, index) => {
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
