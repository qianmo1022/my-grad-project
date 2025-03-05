'use client'
import RecRadio from "../items/rec-radio";
import { RecRadioProps } from "../../lib/definitions";
import { useState } from 'react';

export const version: RecRadioProps[] = [
    { title: "智界 R7 纯电 Pro", description: ["25.98万元起","最高667km长续航 | 满血途灵平台","HUAWEI ADS 基础版"] },
    { title: "智界 R7 纯电 Max", description: ["29.98万元起"," 最高802km超长续航 | 满血途灵平台","HUAWEI ADS 3.0高阶智能驾驶"] }, 
    { title: "智界 R7 纯电 Ultra", description: ["33.98万元起","最高736km超长续航 | 双电机四驱 ","HUAWEI ADS 3.0高阶智能驾驶"] }, 
];

export default function Version() {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(0);

    const handleRadioChange = (index: number) => {
        setSelectedIndex(index);
    };

    return (
        <div className="flex flex-col">
            <p className="text-xl my-4">版本</p>
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
