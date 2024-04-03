import { styled } from "styled-components"

const Nav = () => {
  return (
    <NavWrapper>
        <BlueText>Flying pig</BlueText>
    </NavWrapper>
  )
}

const NavWrapper = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    width: 100%;
    height: 50px;
    background: white;
    display: flex;
    padding: 0 36px;
    border-bottom: 1px solid #d3d3d3;
    z-index: 3;
`;

const BlueText = styled.span`
color: blue;
font-weight: bold;
position: absolute; /* 부모 요소로부터 상대적으로 위치 설정 */
top: 15px; /* 상단 위치 조정 */
left: 200px;
font-size: 20px;
`;

export default Nav