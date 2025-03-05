import { RecRadioProps } from "../../lib/definitions";

// 为组件参数定义类型
interface RecRadioComponentProps {
  info: RecRadioProps;
  isSelected: boolean;
  onChange: () => void;
}

export default function RecRadio({
  info,
  isSelected,
  onChange,
}: RecRadioComponentProps) {
  // 根据 isSelected 动态添加 CSS 类
  const containerClass = `flex flex-col border ${
    isSelected ? "border-[#000000]" : "border-[#d9d9d9]"
  } border-[#000000] rounded-lg p-4 mt-4 `;

  return (
    <div className={containerClass} onClick={onChange}>
      <p className="text-lg font-bold">{info.title}</p>
      {Array.isArray(info.description) ? (
        info.description.map((line, lineIndex) => <p key={lineIndex}>{line}</p>)
      ) : (
        <p>{info.description}</p>
      )}
    </div>
  );
}
