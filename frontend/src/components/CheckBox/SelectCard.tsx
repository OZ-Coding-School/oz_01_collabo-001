import React from 'react';
import styled from "styled-components";

// SelectCardProps 타입을 정의합니다.
interface SelectCardProps {
  checked: boolean;
  name: string;
  price: number;
  description: string;
  onClick: () => void;
}

// 실제로 SelectCard 컴포넌트를 구현하거나 가져와야 합니다.
const SelectCard: React.FC<SelectCardProps> = ({ checked, name, price, description, onClick }) => {
  return (
    <SelectBox onClick={onClick} 
		style={{backgroundColor: checked ? '#F0F6FF' : 'white',
			border: checked ? '1px solid #0067FB' : '1px solid grey'}}>
			<TextContainer>
      <CategoryText>{name}</CategoryText>
			<PriceText>${price}</PriceText>
			</TextContainer>
      <Description>{description}</Description>
      {/* <p>{checked ? '선택됨' : '선택 안됨'}</p> */}
    </SelectBox>
  );
};

export default SelectCard;


const SelectBox = styled.div`
	display: flex;	
	flex-direction: column;
	width: 240px;
	max-height: 50px;
	align-items: center;
	border-radius: 4px;
	background-color: #FFFFFF;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
	padding: 10px;
	margin: 10px;
	cursor: pointer;
	transition: all 0.3s;

	&:hover {
		transform: scale(1.01);
	}
`;

const TextContainer = styled.div`
	display: flex;
	justify-content: center;
	margin-right: 10px;
`
const CategoryText = styled.p`
	margin: 0;
	font-size: 16px;
	font-weight: 700;
	`

const PriceText = styled.p`
	margin: 0;
	font-size: 14px;
	font-weight: 700;
	color: #c2c7d0;
	`

const Description = styled.p`
	margin: 0;
	font-size: 14px;
	`