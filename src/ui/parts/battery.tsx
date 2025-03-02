'use client'
import RecRadio from "../items/rec-radio";
import { RecRadioProps } from "../../lib/definitions";
import { useState } from 'react';
import Image from "next/image";

export const battery: RecRadioProps[] = [
    { title: "82度电池包", description: "价格已包含" },
];

export default function Battery() {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(0);

    const handleRadioChange = (index: number) => {
        setSelectedIndex(index);
    };

    return (
        <div className="flex flex-col">
            <p className="text-xl my-4">电池</p>
            {selectedIndex !== null && (
                <div className="mx-auto w-[80%] h-[10vh] px-[10%] relative">
                <Image
                    src={"/Battery.jpg"}
                    fill
                    className="object-cover"
                    alt="battery"
                />
                </div>
            )}
            {battery.map((item, index) => {
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
