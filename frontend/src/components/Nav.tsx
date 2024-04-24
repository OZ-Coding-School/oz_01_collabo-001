import { styled } from "styled-components"

const Nav = () => {
  return (
    <NavWrapper>
       <Box> 
       <Logo src="/images/logo.png" alt="logo" />

       <Menu>
          <MenuItem href="#">My Account</MenuItem>
          <MenuItem href="#">Hire Talent</MenuItem>
          <MenuItem href="#">Find Work</MenuItem>
        </Menu> 
      </Box>
        
    </NavWrapper>
  )
}

const NavWrapper = styled.nav`
  position: fixed; 
  top: 0; 
  width: 100%; 
  z-index: 999; 
  background-color: #ffffff; 
  color: #000000; 
  border: 1px solid #EAEDEF;
`;

const Logo = styled.img`
  width: 184px;
  height: 56px;
`;

const Box = styled.div`
  width: 100%; 
  max-width: 1280px; 
  height: 80px; 
  padding: 10px 24px; 
  margin: 0 auto; 
  display: flex; 
  justify-content: space-between; /* 로고와 메뉴 간격을 벌리기 위해 */
  align-items: center;  /* 로고와 메뉴를 수직 정렬 */
`;
  
const Menu = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;

  align-items: center; /* 메뉴를 수직 정렬 */
`;

const MenuItem = styled.a`
  color: #000000;
  text-decoration: none;
  font-weight: bold;
  margin-left: 20px; /* 메뉴 간격 조정 */
`;

// const BlueText = styled.span`
//     color: blue;
//     // font-weight: bold;
//     // position: absolute; /* 부모 요소로부터 상대적으로 위치a설정 */
//     // top: 15px; /* 상단 위치 조정 */
//     font-size: 34px;
//     // left: 20px;
//     // paddig: 10px 24px;
// `;






export default Nav
