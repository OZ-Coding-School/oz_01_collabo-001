import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const Nav = () => {
  const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const accessToken = localStorage.getItem('access');
        const refreshToken = localStorage.getItem('refresh');
        setIsLoggedIn(!!accessToken && !!refreshToken);
    }, []); 

    const mypageclick = () => {
        navigate("/mypage");
    };

    const handleLogout = () => {
        localStorage.removeItem('access');
        localStorage.removeItem('refresh');
        setIsLoggedIn(false); 
        navigate("/");
    };


    return (
        <NavWrapper>
            <Box>
                <Logo src="/images/logo.png" alt="logo" onClick={mypageclick} />
                <Menu>
                    <MenuItem to="/mypage">My Account</MenuItem>
                    <MenuItem to="#">Hire Talent</MenuItem>
                    <MenuItem to="#">Find Work</MenuItem>
                    {isLoggedIn ? (
                        <LogoutItem onClick={handleLogout}>Logout</LogoutItem>
                    ) : null} {/* 로그인 상태일 때만 로그아웃 메뉴 표시 */}
                </Menu>
            </Box>
        </NavWrapper>
    );
};

const NavWrapper = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
  background-color: #ffffff;
  color: #000000;
  border: 1px solid #eaedef;
`;

const Logo = styled.img`
  width: 148px;
  height: auto;
  cursor: pointer;
`;

const Box = styled.div`
  width: 100%;
  max-width: 1280px;
  height: 80px;
  padding: 10px 24px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center; 
`;

const Menu = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center; 
`;

const MenuItem = styled(Link)`
  color: #000000;
  text-decoration: none;
  font-weight: bold;
  margin-left: 20px; 
`;

const LogoutItem = styled.li`
  color: #000000;
  text-decoration: none;
  font-weight: bold;
  margin-left: 20px;
  cursor: pointer;
`;

export default Nav;
