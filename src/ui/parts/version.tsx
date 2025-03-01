'use client'
import RecRadio from "../items/rec-radio";
import { RecRadioProps } from "../../lib/definitions";
import { useState } from 'react';

export const version: RecRadioProps[] = [
    { title: "v1.0.0", description: "2023/08/01" },
    { title: "v1.0.1", description: "2023/08/02" }, 
];

export default function Version() {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const handleRadioChange = (index: number) => {
        setSelectedIndex(index);
    };

    return (
        <div className="flex flex-col">
            <p className="text-2xl my-4">版本</p>
            {version.map((item, index) => {
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
