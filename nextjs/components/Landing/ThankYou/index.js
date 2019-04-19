import React, { Component } from "react";
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

const ThankYou = ({thanks}) => {
    return (
      <ThankYouStyled>
        <Title text='Thank you' />
        <section>
          <div>
            {thanks.map((thankyou) => {
              return(
                <section>
                  <img src={thankyou.image} />
                  <Subheading text={thankyou.name} />
                  <Subheading text={thankyou.description} />
                </section>
              )
            })}
          </div>
        </section>
      </ThankYouStyled>
    );
};


ThankYou.propTypes = {};

export default ThankYou;
