import {useState} from "react";
import { styled } from "styled-components";
import { Link, useNavigate } from 'react-router-dom';
import { login } from "../api/login";
import GoogleImage from "/images/google_round@2x.png";
import AppleImage from "/images/appleid_round@2x.png";
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";


// import GoogleButton from "react-google-button";

// https://www.youtube.com/watch?v=KMJE9FIDZl8
// 콘솔에 토큰이 보이지 않음. 
// https://jsonplaceholder.typicode.com/posts

const HomeLogin = () => {
    const [id,setId]=useState('');
    const [pw,setPw]=useState('');
      
    //로그인이 끝났으면 다르 페이지로 넘어가기 위해 라우터 만들어주기
    const router = useNavigate();

    const onChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {setId(e.target.value);};
    const onChangePw = (e: React.ChangeEvent<HTMLInputElement>) => {setPw(e.target.value);};

    const onClick=async ()=>{
        //로그인 api
        const result = await login(id,pw);
        console.log(result);
        const {accessToken, refreshToken}=result;
        localStorage.setItem('access',accessToken);
        localStorage.setItem('refresh',refreshToken);
        router('/complete-registration'); // 로그인 후 CompleteRegistration 페이지로 이동

    }
  return (
    
    <Wrapper>
      <Title>Login</Title>
      <Form>
        <InputWrapper>
          <Input placeholder="ID" value={id} onChange={onChangeId}/>
        </InputWrapper>
        <InputWrapper>
          <Input type="password" placeholder="Password" value={pw} onChange={onChangePw}/>
        </InputWrapper>
        <ButtonWrapper>
        <Button variant="primary" size="md" style={{ width: '100%', height: 'auto' }} onClick={onClick}>Login</Button>
        </ButtonWrapper>
        <CustomLink to="/signup">SignIn</CustomLink>
      </Form>
       
        <Title2>SNS Login</Title2>
        <SnsButton>
                <Googlebtn><img src={GoogleImage} alt="Google" /></Googlebtn>
                <Applebtn><img src={AppleImage} alt="Apple" /></Applebtn>
        </SnsButton>
    </Wrapper>
  )
}

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

// const Inputs = styled.input`
//     display: flex;
//     align-items: center;
//     flex-direction: column;
//     gap: 10px;
//     margin-right: 10px;
//     `

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


// const Input = styled.input`
// font-size: 14px;
// height: 52px;
// border-radius: 10px;
// border: 2px solid lightgrey;
// padding: 0 20px;
// margin-bottom: 25px; /* 입력란 간격 추가 */
//   width: 400px; /* 입력란 너비 조정 */
// &: placeholder {
//   color: darkgrey
//   font-size: 20px;
//   font-weight: 700;
//   margin-bottom: 30px;
// }
// `
// const Button = styled.button`
// font-size: 14px;
// background-color: #0067FB;
// color: white;
// height: 52px;
// border-radius: 10px;
// border: none;
// padding: 15px 40px;

// `
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
const Title2 = styled.div`
font-size: 14px;
margin-top: 90px;
border-top: 2px solid lightgrey;
width: 400px; /* 선의 너비를 부모 요소의 너비와 일치시킵니다. */
text-align: center;

padding-top: 10px;
}
`

const SnsButton = styled.div`
  display: flex;
  justify-content: space-between;
  width: 300px; /* 또는 다른 적절한 너비 */
  margin-top: 40px;
`;

const Googlebtn = styled.button`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0; /* 패딩 제거 */
  border: none; /* 테두리 제거 */
  background: none; /* 배경 제거 */
  width: 100px; /* 너비 조절 */
  height: 40px; /* 높이 조절 */
`;

const Applebtn = styled.button`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0; /* 패딩 제거 */
  border: none; /* 테두리 제거 */
  background: none; /* 배경 제거 */
  width: 100px; /* 너비 조절 */
  height: 40px; /* 높이 조절 */
`;
export default HomeLogin

// import {useState} from "react";
// import { styled } from "styled-components";
// import { Link, useNavigate } from 'react-router-dom';
// import { login } from "../api/login";
// import GoogleImage from "/images/google_round@2x.png";
// import AppleImage from "/images/appleid_round@2x.png";
// import ButtonPractice from "../components/Button/ButtonPractice";
// import Input from "../components/Input/Input";


// // import GoogleButton from "react-google-button";

// // https://www.youtube.com/watch?v=KMJE9FIDZl8
// // 콘솔에 토큰이 보이지 않음. 
// // https://jsonplaceholder.typicode.com/posts

// const HomeLogin = () => {
//     const [id,setId]=useState('');
//     const [pw,setPw]=useState('');
      
//     //로그인이 끝났으면 다르 페이지로 넘어가기 위해 라우터 만들어주기
//     const router = useNavigate();

//     const onChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {setId(e.target.value);};
//     const onChangePw = (e: React.ChangeEvent<HTMLInputElement>) => {setPw(e.target.value);};

//     const onClick=async ()=>{
//         //로그인 api
//         const result = await login(id,pw);
//         console.log(result);
//         const {accessToken, refreshToken}=result;
//         localStorage.setItem('access',accessToken);
//         localStorage.setItem('refresh',refreshToken);
//         router('/complete-registration'); // 로그인 후 CompleteRegistration 페이지로 이동

//     }
//   return (
    
//     <Wrapper>
//       <Title>Login</Title>
//       <Form>
//         <InputWrapper>
//           <Input placeholder="ID" value={id} onChange={onChangeId}/>
//         </InputWrapper>
//         <InputWrapper>
//           <Input type="password" placeholder="Password" value={pw} onChange={onChangePw}/>
//         </InputWrapper>
//         <ButtonWrapper>
//         <ButtonPractice variant="primary" size="md" style={{ width: '100%', height: 'auto' }} onClick={onClick}>Login</ButtonPractice>
//         </ButtonWrapper>
//         <CustomLink to="/signup">SignIn</CustomLink>
//       </Form>
       
//         <Title2>SNS Login</Title2>
//         <SnsButton>
//                 <Googlebtn><img src={GoogleImage} alt="Google" /></Googlebtn>
//                 <Applebtn><img src={AppleImage} alt="Apple" /></Applebtn>
//         </SnsButton>
//     </Wrapper>
//   )
// }

// const Wrapper = styled.section`
// display: flex;
// flex-direction: column;
// align-items: center;
// justify-content: center;
// min-height: 100vh; /* 화면 전체 높이 */

// `
// const InputWrapper = styled.div`
//   margin-bottom: 15px;
// `;

// const ButtonWrapper = styled.div`
//   margin-bottom: 15px;
// `;

// // const Inputs = styled.input`
// //     display: flex;
// //     align-items: center;
// //     flex-direction: column;
// //     gap: 10px;
// //     margin-right: 10px;
// //     `

// const Title = styled.h4`
// font-size: 23px;
// font-weight: bold;
// margin-bottom: 30px;

// `

// const Form = styled.form`
// // max-width: 650px;
// // width: 100%;
// // display: flex;
// // flex-direction: column;
// // align-items: center;
// display: flex;
// height:100%;
// flex-direction: column;
// `


// // const Input = styled.input`
// // font-size: 14px;
// // height: 52px;
// // border-radius: 10px;
// // border: 2px solid lightgrey;
// // padding: 0 20px;
// // margin-bottom: 25px; /* 입력란 간격 추가 */
// //   width: 400px; /* 입력란 너비 조정 */
// // &: placeholder {
// //   color: darkgrey
// //   font-size: 20px;
// //   font-weight: 700;
// //   margin-bottom: 30px;
// // }
// // `
// // const Button = styled.button`
// // font-size: 14px;
// // background-color: #0067FB;
// // color: white;
// // height: 52px;
// // border-radius: 10px;
// // border: none;
// // padding: 15px 40px;

// // `
// const CustomLink = styled(Link)`
// font-size:14px;
// margin-top: 20px;
// color: black;
// text-decoration: none;
// align-self: flex-end;
// margin-top: 10px; /* 입력란 간격 추가 */

// &:visited{
//     color: black;
//     text-decoration: none;
// }
// `
// const Title2 = styled.div`
// font-size: 14px;
// margin-top: 90px;
// border-top: 2px solid lightgrey;
// width: 400px; /* 선의 너비를 부모 요소의 너비와 일치시킵니다. */
// text-align: center;

// padding-top: 10px;
// }
// `

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
// export default HomeLogin