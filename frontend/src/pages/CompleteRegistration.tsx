import { styled } from "styled-components";
import { FaRegCircleCheck } from "react-icons/fa6";
import Button from "../components/Button/Button";

const CompleteRegistration: React.FC = () => {
    return (
      <Wrapper>
        <IconContainer>
             <FaRegCircleCheck />
        </IconContainer>
        <Title>Your public profile has been created</Title>
        <Button variant="secondary" size="md" style={{ width: '300px', height: 'auto', marginBottom: '10px' }}>View my profile</Button>
        <Button variant="outlineSecondary" size="md" style={{ width: '300px', height: 'auto' }}>Manage my account</Button>

      </Wrapper>
    );
  };


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  
`;

const IconContainer = styled.div`
  font-size: 200px;
  margin-bottom: 10px;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 50px;
`;

// const Button = styled.button<{ primary?: boolean }>`
//   padding: 10px 20px;
//   margin-bottom: 10px;
//   width: 300px; /* 버튼 너비 */
//   height: 52px; /* 버튼 높이 */
//   border: 2px solid black;
//   border-radius: 5px;
//   background-color: ${(props) => (props.primary ? "black" : "white")};
//   color: ${(props) => (props.primary ? "white" : "black")};
//   font-size: 13px;
//   cursor: pointer;

// `;
export default CompleteRegistration