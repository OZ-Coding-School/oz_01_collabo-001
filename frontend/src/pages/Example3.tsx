import SearchInput from "../components/SearchInput/SearchInput";

const Example3 = () => {
  const handleSearch = (searchTerm:string) => {
    console.log("검색어:", searchTerm);
    // 실제 검색 로직을 구현할 수 있습니다.
  };

  return (
    <div>
      <h1>검색창 컴포넌트 예제</h1>
			<SearchInput placeholder="검색어를 입력해주세요" onSearch={handleSearch} />
    </div>
  );
};

export default Example3;