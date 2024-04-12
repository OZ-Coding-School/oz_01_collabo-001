import React, { useState } from "react";
import SelectComponent from "../components/Select/SelectComponent";

const Example2 : React.FC = () => {
  // 선택 가능한 옵션 목록
  const options = [
    { label: "최신순", value: "최신순" },
    { label: "오래된순", value: "오래된순" },
		{ label: "이름순", value: "이름순" },
  ];
  // 현재 선택된 옵션의 상태를 관리합니다.
  const [selectedFruit, setSelectedFruit] = useState<string>("");
  // 선택된 옵션이 변경될 때 실행될 핸들러입니다.
  const handleChange = (newValue: string) => {
    setSelectedFruit(newValue);
    console.log(`Selected: ${newValue}`);
  };
  return (
    <div>
      <h1>Favorite Fruit</h1>
      <SelectComponent
				// width="200px"
        label=""
        options={options}
        selected={selectedFruit}
        onChange={handleChange}
      />
      <SelectComponent
				width="500px"
        label=""
        options={options}
        selected={selectedFruit}
        onChange={handleChange}
      />
      <SelectComponent
				width="300px"
        label=""
        options={options}
        selected={selectedFruit}
        onChange={handleChange}
      />
			
    </div>
  );
};
export default Example2;