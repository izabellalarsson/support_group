import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Title from "../../Title";

const ThankYouStyled = styled.div`
  /* overflow: hidden; */
  /* scroll-snap-type: x mandatory; */
  div {
    height: 80vh;
    width: 100vw;
    margin-top: -20px;
    padding: 0;
    background: var(--main-bg);
    margin-bottom: 55px;
    display: flex;
    scroll-snap-points-y: repeat(100vw);
    scroll-snap-type: x mandatory;
    overflow-x: scroll;
  }

  section {
    border-right: 1px solid white;
    padding: 1rem;
    min-width: 100vw;
    height: 80vh;
    scroll-snap-align: start;
    position: relative;
  }
  img {
    width: 90%;
    height: 50%;
    object-fit: cover;
    object-position: 50% 50%;
    margin: 15px;
    position: absolute;
    top: 50%;
    transform: translateY(-80%);
  }
`;

const ThankYou = props => {
  return (
    <ThankYouStyled>
      <Title text='Thank you' />
      <div>
        <section>
          <img src='https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80' />
        </section>
        <section>
          <img src='https://images.unsplash.com/photo-1444210971048-6130cf0c46cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80' />
        </section>
      </div>
    </ThankYouStyled>
  );
};

ThankYou.propTypes = {};

export default ThankYou;
