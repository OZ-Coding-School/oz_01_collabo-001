import React from 'react';
import Nav from '../components/Nav'; // Nav 컴포넌트를 가져옵니다.

import { styled } from "styled-components";
import { IoBusiness } from "react-icons/io5";
import { MdOutlinePerson2 } from "react-icons/md";

const Signup: React.FC = () => {
  return (
    <>
      <Nav /> {/* 네비게이션 바를 레이아웃에 포함시킵니다. */}
      <Wrapper>
        <Title>Select the type of membership you want
</Title>
          <IconContainer>
            <IconWrapper>
              <IoBusinessIcon onClick={handleBusinessButtonClick} />
              <BusinessText>Business</BusinessText>
            </IconWrapper>
            <IconWrapper>
              <PersonIcon onClick={handleFreelancersButtonClick}/>
              <FreelancersText>Freelancers</FreelancersText>
            </IconWrapper>
          </IconContainer>
          {/* <Button>Next</Button> */}
      </Wrapper>
    </>
  );
};
const handleBusinessButtonClick = () => {
  console.log("Business button clicked");
  // 여기에 클릭 시 수행할 동작을 추가하세요.
};

// Freelancers 버튼 클릭 시 실행될 함수
const handleFreelancersButtonClick = () => {
  console.log("Freelancers button clicked");
  // 여기에 클릭 시 수행할 동작을 추가하세요.
};

export default Signup;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // min-height:calc(100vh-80px);/* 화면 전체 높이 */
  min-height:100vh;/* 화면 전체 높이 */
`

const Title = styled.p`
  font-size: 23px;
  font-weight: bold;
  margin-bottom: 30px;
`


const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px; /* 간격 조정 */
`

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* 아이콘과 단어를 가운데로 정렬합니다. */
  margin: 0 60px; /* 아이콘 간의 간격 조정 */
  border: 2px solid lightgrey; /* 테두리 추가 */
  border-radius: 50%; 
  width: 224px; /* 테두리의 너비를 조정합니다. */
  height: 224px; /* 테두리의 높이를 조정합니다. */
  padding: 20px; /* 내부 여백 추가 */
  transition: border-color 0.3s, color 0.3s; /* 테두리 색상 및 텍스트 색상 변화에 대한 전환을 추가합니다. */
  &:hover {
    border-color: blue; /* 마우스를 가져다 대면 파랑색으로 테두리 색상을 변경합니다. */
    color: blue; /* 마우스를 가져다 대면 파랑색으로 텍스트 색상을 변경합니다. */
  }
`

const IoBusinessIcon = styled(IoBusiness)`
  font-size: 100px; /* 아이콘 크기를 조정합니다. */
`

const PersonIcon = styled(MdOutlinePerson2)`
  font-size: 100px; /* 아이콘 크기를 조정합니다. */
`

const BusinessText = styled.div`
  font-size: 20px;
  text-align: center; /* 텍스트를 가운데로 정렬합니다. */
  margin-top: 10px; /* 텍스트와 아이콘 사이의 간격을 조정합니다. */
`

const FreelancersText = styled.div`
  font-size: 20px;
  text-align: center; /* 텍스트를 가운데로 정렬합니다. */
  margin-top: 10px; /* 텍스트와 아이콘 사이의 간격을 조정합니다. */
`

// const Button = styled.button`
// font-size: 14px;
// background-color: #0067FB;
// color: white;
// height: 52px;
// border-radius: 10px;
// border: none;
// padding: 15px 40px;
// margin-top: 80px;
// width: 136px;
// `