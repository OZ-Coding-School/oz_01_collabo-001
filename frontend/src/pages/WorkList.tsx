// 가짜데이터로 해보기
import { styled } from "styled-components";
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SearchInput from "../components/SearchInput/SearchInput";
import SelectComponent from "../components/Select/SelectComponent";
// import Button from "../components/Button/Button";
import UserProfileImage from "../components/ProfileImage/UserProfileImage"; // UserProfileImage import 추가
import Tag from "../components/Tag/Tag";

// 가짜 데이터
const WorkList: React.FC = () => {
  const handleSearch = (searchTerm:string) => {
    console.log("검색어:", searchTerm);
    // 실제 검색 로직을 구현할 수 있습니다.
  };
  const [loading, setLoading] = useState(false);
  const [boards, setBoards] = useState<{
    idx: number;
    title: string;
    contents: string;
    tag: string;
    profileImageUrl: string;
  }[]>([]);
  const options = [
    { label: "최신순", value: "최신순" },
    { label: "오래된순", value: "오래된순" },
    { label: "이름순", value: "이름순" },
  ];
  const [selectedFruit, setSelectedFruit] = useState<string>("");
  // 선택된 옵션이 변경될 때 실행될 핸들러입니다.
  const handleChange = (newValue: string) => {
    setSelectedFruit(newValue);
    console.log(`Selected: ${newValue}`);
  };

  // 가짜 데이터 배열
  const fakeData = [
    {
      idx: 1,
      title: '백엔드 박상훈입니다',
      contents: '오즈 코딩 스쿨 백엔드 1기',
      tag: 'Python',
      profileImageUrl: 'https://cdn.pixabay.com/photo/2020/05/17/20/21/cat-5183427_1280.jpg',
    },
    {
      idx: 2,
      title: '프론트엔드 황혜린입니다.',
      contents: '오즈 코딩 스쿨 프론트엔드 1기',
      tag: 'React',
      profileImageUrl: 'https://cdn.pixabay.com/photo/2020/05/17/20/21/cat-5183427_1280.jpg',
    },
    // 더 많은 가짜 데이터 추가 가능
  ];

  useEffect(() => {
    setBoards(fakeData);
    setLoading(false);
  }, []);
  return (
    <Wrapper>
      <Search>
        <SearchInput placeholder="검색어를 입력해주세요" onSearch={handleSearch} />
        <RightAlignedWrapper>
          <SelectComponent
            label=""
            options={options}
            selected={selectedFruit}
            onChange={handleChange}
          />
          <CustomButton to="/describeyou">
            {/* <Button variant="primary" size="sm">Create Profile</Button> */}
          </CustomButton>
        </RightAlignedWrapper>
      </Search>
      {loading ? (
        <h2>loading...</h2>
      ) : (
        boards.map(board => (
          <LinkWrapper key={board.idx}>
            <CustomLink to={`/board/${board.idx}`}>
              <Listing>
                <Title>{board.title}</Title>
                <ProfileSection>
                  <UserProfileImage size="medium" imageUrl={board.profileImageUrl} />
                  <Contents>{board.contents}</Contents>
                </ProfileSection>
                <Tag text={board.tag} />
              </Listing>
            </CustomLink>
          </LinkWrapper>
        ))
      )}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  min-height: 100vh;
  width: calc(100% - 60px); /* 왼쪽과 오른쪽에 각각 24px의 여백을 주기 위해 전체 너비에서 48px를 뺍니다. */
  padding: 10px 24px; 
`;

const Search = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between; /* 자식 요소를 양쪽으로 정렬 */
  width: 100%; /* 부모 요소인 Wrapper의 전체 너비 차지 */
  border-bottom: 2px solid black;
`;

const RightAlignedWrapper = styled.div`
  display: flex;
  align-items: center;
  
`;

const LinkWrapper = styled.div`
  display: inline-block; /* 인라인 요소를 블록 요소로 변경 */
  width: 100%; /* 전체 너비 차지 */
  border-bottom: 1px solid black; /* 밑줄 스타일 설정 */
  margin-bottom: 10px; /* 각 링크 아래에 간격 추가 */
  
`;

const CustomLink = styled(Link)`
  font-size:14px;
  margin-top: 20px;
  color: black;
  text-decoration: none;
  align-self: flex-end;
  margin-top: 10px;
`;

const Title = styled.h2`
  margin-bottom: 5px;
`;

const Listing = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* 왼쪽으로 정렬 */
  justify-content: center;
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Contents = styled.p`
  margin-left: 10px;
`;

const CustomButton = styled(Link)`
  text-decoration: none;
`;

export default WorkList;


// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import Board from '../components/Board';

// const WorkList = () => {
//   const { idx } = useParams(); // /board/:idx와 동일한 변수명으로 데이터를 꺼낼 수 있습니다.
//   const [loading, setLoading] = useState(true);
//   const [board, setBoard] = useState<{ idx: number, title: string, contents: string, createdBy: string } | null>(null);

//   const getBoard = async () => {
//     const resp = await (await axios.get(`//localhost:5173/findwork/${idx}`)).data;
//     setBoard(resp.data);
//     setLoading(false);
//   };

//   useEffect(() => {
//     getBoard();
//   }, []);

//   return (
//     <div>
//       {loading ? (
//         <h2>loading...</h2>
//       ) : board ? (
//         <Board
//           idx={board.idx}
//           title={board.title}
//           contents={board.contents}
//           createdBy={board.createdBy}
//         />
//       ) : (
//         <h2>No data found</h2>
//       )}
//     </div>
//   );
// }
// export default WorkList;