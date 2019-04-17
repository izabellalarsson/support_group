import React from "react";
import styled from "styled-components";
const SearchStyled = styled.div`
  margin-left: 200px;
  i {
    font-size: 20px;
  }
`;

const Search = props => {
  return (
    <SearchStyled onClick={props.handleClickSearch}>
      <i className='fas fa-search'> </i>{" "}
    </SearchStyled>
  );
};

export default Search;
