import React, { ReactElement } from 'react';
import Nav from './Nav'; // Nav 컴포넌트를 가져옵니다.

interface LayoutProps {
  children: ReactElement | ReactElement[]; // ReactElement로 변경
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Nav /> {/* 네비게이션 바를 레이아웃에 포함시킵니다. */}
      {children} {/* 각 페이지의 컨텐츠를 표시합니다. */}
    </>
  );
};

export default Layout;