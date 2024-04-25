import { useState } from "react";
import styled from "styled-components";
import SelectCard from "./SelectCard";

type Option = {
  name: string;
  price: number;
  description: string;
  checked?: boolean;
};

interface MultiSelectProps {
  onChange: (value: Option[]) => void;
  value: Option[]; //초기 옵션 배열
}

function MultiSelect({ onChange, value }: MultiSelectProps) {
  const [values, setValues] = useState(value);

  function toggle(index: number) {
    //SelectCard 컴포넌트를 클릭할 때 호출
    const newValues = values.map((item, idx) => {
      if (idx === index) {
        return { ...item, checked: !item.checked };
      }
      return item;
    });
    setValues(newValues);
    onChange(newValues.filter((item) => item.checked));
  }

  return (
    <>
      <MultiSelectDiv>
        {values.map((option, index) => (
          <SelectCard
            key={option.name} // 고유한 key prop을 사용합니다. (예: name)
            checked={option.checked ?? false}
            name={option.name}
            price={option.price}
            description={option.description}
            onClick={() => toggle(index)}
          />
        ))}
      </MultiSelectDiv>
    </>
  );
}

export default MultiSelect;

const MultiSelectDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
