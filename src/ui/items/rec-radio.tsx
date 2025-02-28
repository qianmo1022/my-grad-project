import { RecRadioProps } from "../../lib/definitions";

// 为组件参数定义类型
interface RecRadioComponentProps {
    info: RecRadioProps;
    isSelected: boolean;
    onChange: () => void;
  }

export default function RecRadio({info,isSelected,onChange}: RecRadioComponentProps) {
    // 根据 isSelected 动态添加 CSS 类
    const containerClass = `flex flex-col border border-[#000000] rounded-lg p-4 mt-4 ${isSelected ? 'bg-blue-100' : ''}`;

    return (
        <div className={containerClass} onClick={onChange}>
            <p className="text-xl font-bold">{info.title}</p>
            <p className="text-lg">{info.description}</p>
        </div>
    );
}