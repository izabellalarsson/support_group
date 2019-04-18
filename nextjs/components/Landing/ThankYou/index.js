import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Title from "../../Title";
import Subheading from "../../Subheading";
const ThankYouStyled = styled.div`
  /* overflow: hidden; */
  /* scroll-snap-type: x mandatory; */
  div {
    width: 100vw;
    /* background: red; */
    margin-bottom: 55px;
    display: flex;
    scroll-snap-points-y: repeat(100vw);
    scroll-snap-type: x mandatory;
    overflow-x: scroll;
    height: 50vh;
    position: relative;
    padding-top: 5rem;
  }

  div section {
    padding-right: 0.5rem;
    min-width: 90vw;
    height: 35vh;
    scroll-snap-align: start;
    /* position: relative; */
    background: rgba(0, 0, 0, 0);
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50% 50%;
    margin: 15px;
    /* position: absolute; */
    /* top: 50%; */
    /* transform: translateY(-80%); */
  }

  h1 {
    position: relative;
  }

  section {
    height: 60vh;
    width: 90%;
    margin-top: -20px;
    padding: 0;
    background: var(--main-bg);
    margin-bottom: 55px;
    align-self: flex-start;
  }

  h2 {
    margin-top: 0;
    margin-bottom: 0;
  }
`;

const ThankYou = props => {
  return (
    <ThankYouStyled>
      <Title text='Thank you' />
      <section>
        <div>
          <section>
            <img src='https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80' />
            <Subheading text='Izabella Larsson' />
          </section>
          <section>
            <img src='https://images.unsplash.com/photo-1444210971048-6130cf0c46cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80' />
            <Subheading text='Per Baltzar' />
            <Subheading text='Member since 2019' />
          </section>
        </div>
      </section>
    </ThankYouStyled>
  );
};

ThankYou.propTypes = {};

export default ThankYou;
