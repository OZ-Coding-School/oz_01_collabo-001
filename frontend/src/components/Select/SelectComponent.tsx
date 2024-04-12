import React from "react";
import styled from "styled-components";
interface Option {
  label: string;
  value: string;
}
interface SelectProps {
  width?: string;
  label?: string;
  options: Option[];
  selected: string;
  onChange: (value: string) => void;
}
// 스타일이 적용된 select 컴포넌트
const StyledSelect = styled.select<{ width?: string }>`
  width: ${(props) => (props.width ? props.width : "auto")};
  padding: 0.5em 2.5em 0.5em 0.5em;
  margin: 0.5em;
  border: 1px solid #ddd;
  border-radius: 4px;
  outline: none;
`;
// 레이블과 함께 래핑된 컴포넌트
const SelectWrapper = styled.div`
  position: relative;
  display: inline-block;
`;
const SelectLabel = styled.label`
  margin-right: 10px;
`;
const SelectComponent: React.FC<SelectProps> = ({ label, options, selected, onChange, width }) => {
  return (
    <SelectWrapper>
      {label && <SelectLabel>{label}</SelectLabel>}
      <StyledSelect width={width} value={selected} onChange={(e) => onChange(e.target.value)}>
           {/* 여기에 안내 메시지용 옵션을 추가합니다 */}
           <option value="" disabled hidden selected>
          선택해주세요
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </StyledSelect>
    </SelectWrapper>
  );
};
export default SelectComponent;