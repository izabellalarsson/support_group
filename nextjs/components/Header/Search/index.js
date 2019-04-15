import React from 'react';
import styled from 'styled-components';
const SearchStyled = styled.div`
    margin-left: 200px;
    i {
        font-size: 20px;
    }
    div {
        width: 100%;
        height: 50px;
        display: ${props => props.searchOpen ? "block" : "none"};
        background-color: hotpink;
    }
`

const Search = (props) => {
    return (
        <SearchStyled onClick={props.handleClickSearch} searchOpen={props.searchOpen} >
            <i className="fas fa-search"></i>
            <div>

            </div>
        </SearchStyled>
    );
};

export default Search;