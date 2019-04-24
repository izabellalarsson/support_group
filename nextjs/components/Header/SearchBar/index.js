import React from 'react';
import styled from 'styled-components';

const SearchBarStyled = styled.div`

        transition: 0.5s;
        width: 100%;
        height: 60px;
        display: flex;
        ${props => props.searchOpen ? "top: 7vh " : "top: 0px; height: 7vh"};
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
                <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5ZM16.8574 18.8574C15.0928 20.2018 12.8896 21 10.5 21C4.70101 21 0 16.299 0 10.5C0 4.70101 4.70101 0 10.5 0C16.299 0 21 4.70101 21 10.5C21 12.8274 20.2428 14.9779 18.9613 16.7186L23.1213 20.8787L21 23L16.8574 18.8574Z" fill="#F3F5FF"/>
                </svg>
            </div>
        </SearchBarStyled>
    );
};

export default SearchBar;