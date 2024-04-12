import React, { useState } from "react";
import styled from "styled-components";
interface SearchInputProps {
  placeholder?: string;
  onSearch: (value: string) => void;
}
const SearchBar = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 20px;
  padding: 5px 10px;
	width: 400px;
`;
const Input = styled.input`
  border: none;
  outline: none;
  flex-grow: 1;
  margin-right: 10px;
  border-radius: 20px;
  padding: 5px;
 
  &:focus {
    box-shadow: 0 0 5px rgba(81, 203, 238, 1);
  }
`;
const SearchButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  font-size: 1em;
  display: flex;
  align-items: center;
`;
const SearchIcon = styled.span` /* 여기서는 텍스트로 대체했습니다. */
  user-select: none;
  margin-right: 5px;
`;
const SearchInput: React.FC<SearchInputProps> = ({ placeholder, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = () => {
    onSearch(searchTerm);
  };
  return (
    <SearchBar>
      <Input
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && handleSearch()}
      />
      <SearchButton onClick={handleSearch}>
        <SearchIcon>×</SearchIcon>
        Q
      </SearchButton>
    </SearchBar>
  );
};
export default SearchInput;