import React from "react";
import styled from "styled-components";
import Text from "../../Text";
import Title from "../../Title";
import BlueLine from "../../BlueLine";
import ReadMore from "../../ReadMore";

const JourneyCardStyled = styled.section`
  background-color: white;
  margin-bottom: 60px;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
    object-position: 50% 50%;
    margin-top: 4vh;
    margin-bottom: 60px;
  }
  div:nth-child(2) {
    position: absolute;
    background-color: white;
    margin: 31vh auto 0 auto;
    width: 50%;
    height: 13vh;
  }
  div:nth-child(2) p {
    margin-left: 30px;
    font-size: 12px;
  }
  div:nth-child(5) {
    display: flex;
    justify-content: flex-end;
  }
`;
const JourneyCard = ({ name, age, memberSince, src }) => {
  return (
    <JourneyCardStyled>
      <Title text='This is my SGN journey' />
      <div>
        <p> {name} </p> <p> {`${age} years old`} </p>{" "}
        <p> {`Member since ${memberSince}`} </p>{" "}
      </div>{" "}
      <img src={src} alt='person' />
      <Text text='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' />
      <div>
        <ReadMore />
      </div>{" "}
      <BlueLine />
    </JourneyCardStyled>
  );
};

export default JourneyCard;
