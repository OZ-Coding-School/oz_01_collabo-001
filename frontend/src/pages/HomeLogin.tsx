import { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { styled } from "styled-components";
import { login } from "../api/login";
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";



const HomeLogin = () => {
    const [user_id,setUser_id]=useState('');
    const [password,setPassword]=useState('');
    const router = useNavigate();

    const isLoggedIn = () => {
        const accessToken = localStorage.getItem('access');
        // 로컬 스토리지에 액세스 토큰이 존재한다면 로그인 상태로 판단
        return !!accessToken;
    };

    useEffect(() => {
        if (isLoggedIn()) {
            router('/mypage'); 
        }
    }, [router]);



    const onChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {setUser_id(e.target.value);};
    const onChangePw = (e: React.ChangeEvent<HTMLInputElement>) => {setPassword(e.target.value);};

    const onClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();

      try {
          // 로그인 시도
          const result = await login(user_id, password);
          console.log(result);
          const { 'access_token': accessToken, 'refresh_token': refreshToken } = result;
          localStorage.setItem('access', accessToken);
          localStorage.setItem('refresh', refreshToken);
          router('/mypage'); // 로그인 성공 시 마이페이지로 이동
      } catch (error) {
          alert('The information is invalid');
          console.error('로그인 실패:', error);
      }
  };

  return (
    
    <Wrapper>
    <Title>Login</Title>
    <Form>
        <InputWrapper>
            <Input placeholder="ID" value={user_id} onChange={onChangeId}/>
        </InputWrapper>
        <InputWrapper>
            <Input type="password" placeholder="Password" value={password} onChange={onChangePw}/>
        </InputWrapper>
        <ButtonWrapper>
            <Button variant="primary" size="md" style={{ width: '100%', height: 'auto' }} onClick={onClick}>Login</Button>
        </ButtonWrapper>
    </Form>
    <SignWrapper>
    <CustomLink to="/signup">SignIn</CustomLink>
    </SignWrapper>

    {/* <Title2>SNS Login</Title2> */}
    {/* <SnsButton>
        <Googlebtn><img src={GoogleImage} alt="Google" /></Googlebtn> 
        <Applebtn><img src={AppleImage} alt="Apple" /></Applebtn>
    </SnsButton> */}
</Wrapper>
);
};
const Wrapper = styled.section`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
min-height: 100vh; /* 화면 전체 높이 */

`
const InputWrapper = styled.div`
  margin-bottom: 15px;
`;

const ButtonWrapper = styled.div`
  margin-bottom: 15px;
`;

const Title = styled.h4`
font-size: 23px;
font-weight: bold;
margin-bottom: 30px;

`

const Form = styled.form`
// max-width: 650px;
// width: 100%;
// display: flex;
// flex-direction: column;
// align-items: center;
display: flex;
height:100%;
flex-direction: column;
`
const CustomLink = styled(Link)`
font-size:14px;
margin-top: 20px;
color: black;
text-decoration: none;
align-self: flex-end;
margin-top: 10px; /* 입력란 간격 추가 */

&:visited{
    color: black;
    text-decoration: none;
}
`

const SignWrapper = styled.div`
margin-left: 280px;

`

// const Title2 = styled.div`
// font-size: 14px;
// margin-top: 90px;
// border-top: 2px solid lightgrey;
// width: 400px; /* 선의 너비를 부모 요소의 너비와 일치시킵니다. */
// text-align: center;
// padding-top: 10px;
// `;

// const SnsButton = styled.div`
//   display: flex;
//   justify-content: space-between;
//   width: 300px; /* 또는 다른 적절한 너비 */
//   margin-top: 40px;
// `;

// const Googlebtn = styled.button`
//   flex: 1;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding: 0; /* 패딩 제거 */
//   border: none; /* 테두리 제거 */
//   background: none; /* 배경 제거 */
//   width: 100px; /* 너비 조절 */
//   height: 40px; /* 높이 조절 */
// `;

// const Applebtn = styled.button`
//   flex: 1;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding: 0; /* 패딩 제거 */
//   border: none; /* 테두리 제거 */
//   background: none; /* 배경 제거 */
//   width: 100px; /* 너비 조절 */
//   height: 40px; /* 높이 조절 */
// `;
export default HomeLogin