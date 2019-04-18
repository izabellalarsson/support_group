import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Title from "../Title";
import Subheading from "../Subheading";
import Text from "../Text";
const JourneyStyled = styled.div`
  h1 {
    width: 60%;
  }

  div:nth-child(1) {
    background: var(--main-bg);
    padding-bottom: 30px;
  }

  h2 {
    margin-bottom: 0;
    margin-top: 0;
  }
  img {
    width: 100%;
    margin: 0 0 30px;
  }
`;

const Journey = ({ journey }) => {
  return (
    <JourneyStyled>
      <div>
        <Title text='This is my SGN journey' />
      </div>
      <img src={journey.image} />
      <Subheading text={journey.name + ", " + journey.age} />
      <Subheading text={"member sice " + journey.member_since} />
      <Text text={journey.description} />
    </JourneyStyled>
  );
};

Journey.propTypes = {};

export default Journey;
