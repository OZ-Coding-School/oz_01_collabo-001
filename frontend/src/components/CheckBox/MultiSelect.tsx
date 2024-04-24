import { useState } from 'react';
import styled from 'styled-components';
import SelectCard from './SelectCard';

type Option = {
	name: string;
	price: number;
	description: string; //여기까지는  속성 필수
	checked?: boolean; //해당 항목이 선택되었는지 여부를 나타내는 속성
};

interface MultiSelectProps {
	onChange: (value: Option[]) => void; //배열을 인수로 받아 콜백 함수를 호출하는 함수
	value: Option[]; //초기 옵션 배열 
}


function MultiSelect({ onChange, value }: MultiSelectProps) {
  const [values, setValues] = useState(value);
  //values는 value를 상태로 사용하고, setValues는 value를 업데이트하는 함수로 사용합니다.

  function toggle(index: number) { //toggle 함수는 선택된 항목의 checked 속성을 토글합니다.
    //SelectCard 컴포넌트를 클릭할 때 호출
    const newValues = values.map((item, idx) => {
      if (idx === index) {
        return { ...item, checked: !item.checked };
      }
      return item;
    });
    setValues(newValues);
    onChange(newValues.filter(item => item.checked));
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
  `