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
  state = {
    journey: [],
    thanks: [],
    awards: []
  }
  componentDidMount(){
    this.fetchRandomJournies();
    this.fetchThanks();
  }

  fetchRandomJournies = async () => {
    const res = await fetch(`http://${process.env.HOST}/wp-json/wp/v2/journey`);
    const journies = await res.json();
    this.setState({
      journey: journies[Math.floor(Math.random() * journies.length)]
    }) 
  }
  fetchThanks = async () => {
    const res = await fetch(`http://${process.env.HOST}/wp-json/wp/v2/thanks`);
    const thanks = await res.json();
    this.setState({
      thanks: thanks
    }) 
  }
  fetchAwars = async () => {
    const res = await fetch(`http://${process.env.HOST}/wp-json/wp/v2/thanks`);
    const awards = await res.json();
    this.setState({
      awards: awards
    }) 
  }

  render() {
    return (
      <LandingStyled>
        <Hero text='Support Group Network' />
        <JourneyCard 
          name = {this.state.journey.name}
          age = {this.state.journey.age}
          memberSince = {this.state.journey.member_since}
          image={this.state.journey.image}
          description={this.state.journey.description}
          slug={this.state.journey.slug}
        />
        <Awards text='Awards' />
        <ThankYou thanks={this.state.thanks}/>
      </LandingStyled>
    );
  }
}
