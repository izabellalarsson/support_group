import React from 'react';
import styled from 'styled-components';

const SearchBarStyled = styled.div`

        transition: 0.5s;
        width: 100%;
        height: 60px;
        display: flex;
        ${props => props.searchOpen ? "top: 7vh " : "top: -11px;"};
        background-color: var(--sub-bg);
        position: absolute;
        left: 0;
        justify-content: center;
        align-items: center;
        div{
            border-bottom: 3px solid white;
            margin: 10px 0;
            width: 70%;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            i {
                font-size: 20px;
                color: white;
            }
        }
        
        input {
            margin-bottom: -4px;
            font-weight: medium;
            outline: none;
            height: 40px;
            background: transparent;
            border: none;
            width: 100%;
            font-size: 20px;
            font-family: 'Aktiv Grotesk', sans-serif;
            color: white;
            &::placeholder {
                color: white;
                font-family: 'Aktiv Grotesk', sans-serif;
        }
    
}

`

const SearchBar = (props) => {
    return (
        <SearchBarStyled searchOpen={props.searchOpen}>
            <div>
                <input type="text" placeholder="Search" />
                <i className="fas fa-search"></i>
            </div>
        </SearchBarStyled>
    );
};

export default SearchBar;