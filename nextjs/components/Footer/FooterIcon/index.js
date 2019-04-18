import React from "react";
import styled from "styled-components";
const FooterIconStyled = styled.div`
  width: 42px;
  height: 42px;
  border: 2px solid ${props => props.color || "white"};
  border-radius: 50%;
  margin: 0px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.color || "white"};
  background-color: ${props =>
    props.color ? "var(--main-bg)" : "var(--headline-font)"};

  path {
    fill: ${props => (props.color ? "var(--sub-bg) !important" : "white")};
  }
  circle:first-child {
    stroke: ${props => (props.color ? "var(--sub-bg) !important" : "white")};
  }
`;

const FooterIcon = ({ icon, style, handleClickSettings, isClicked }) => {
  return (
    <FooterIconStyled color={style} onClick={handleClickSettings}>
      {icon === "settings" && (
        <svg xmlns='http://www.w3.org/2000/svg' width='46' height='44'>
          <circle
            fill='none'
            stroke='#FFF'
            stroke-width='3'
            cx='22.1'
            cy='22.1'
            r='7.9'
          />
          <path
            fill='#FFF'
            d='M20.3 10h3.6l.8 3.6h-5.3l.9-3.6zM23.9 34.1h-3.6l-1-3.5h5.4L24 34zM10 23.9v-3.6l3.6-1v5.4L10 24zM34.1 20.3v3.6l-3.5.8v-5.3l3.5.9zM29.3 12.3l2.6 2.5-2 3.2-3.7-3.8 3.1-2zM14.8 31.9l-2.5-2.6 1.9-3.1L18 30l-3.2 1.9zM12.3 14.8l2.5-2.5 3.2 1.9-3.8 3.8-2-3.2zM31.9 29.3L29.3 32l-3.1-2 3.8-3.7 1.9 3.1z'
          />
        </svg>
      )}

      {icon === "facebook" && (
        <svg
          width='50'
          height='50'
          viewBox='0 0 41 41'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M23.3111 20.9554H20.3133V30.6645H15.8391V20.9554H13.6914V17.1522H15.8391V14.6914C15.8391 12.9464 16.6892 10.1724 20.3581 10.1724H23.669V13.8413H21.2529C20.8502 13.8413 20.3133 14.0202 20.3133 14.8703V17.1075H23.7138L23.3111 20.9554Z'
            fill='white'
          />
        </svg>
      )}

      {icon === "youtube" && (
        <svg
          width='24'
          height='24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M19.615 3.184c-3.604-.246-11.631-.245-15.23 0C.488 3.45.029 5.804 0 12c.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0C23.512 20.55 23.971 18.196 24 12c-.029-6.185-.484-8.549-4.385-8.816zM9 16V8l8 3.993L9 16z'
            fill='#fff'
          />
          <defs>
            <clipPath id='clip0'>
              <path fill='#fff' d='M0 0h24v24H0z' />
            </clipPath>
          </defs>
        </svg>
      )}
    </FooterIconStyled>
  );
};

export default FooterIcon;
