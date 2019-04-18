import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Hero from "../Hero";
import ReadMore from "../ReadMore";
import Title from "../Title";
import Awards from "./Awards";
import JourneyCard from "../Members/JourneyCard";
import ThankYou from "./ThankYou";

const LandingStyled = styled.div``;
export default class Landing extends Component {
  render() {
    return (
      <LandingStyled>
        <Hero text='Support Group Network' />
        <JourneyCard src='https://images.unsplash.com/photo-1506919258185-6078bba55d2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1415&q=80' />
        <Awards text='Awards' />
        <ThankYou />
      </LandingStyled>
    );
  }
}
