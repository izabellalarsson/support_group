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
    awards: [],
    page: []
  };
  componentDidMount() {
    this.fetchRandomJournies();
    this.fetchThanks();
    this.fetchAwards();
    this.fetchPage("landing");
  }

  fetchPage = async slug => {
    const res = await fetch(
      `http://${process.env.HOST}/wp-json/wp/v2/pages?slug=${slug}]`
    );
    const page = await res.json();
    this.setState({
      page: page[0]
    });
  };

  fetchRandomJournies = async () => {
    const res = await fetch(`http://${process.env.HOST}/wp-json/wp/v2/journey`);
    const journies = await res.json();
    this.setState({
      journey: journies[Math.floor(Math.random() * journies.length)]
    });
  };
  fetchThanks = async () => {
    const res = await fetch(`http://${process.env.HOST}/wp-json/wp/v2/thanks`);
    const thanks = await res.json();
    this.setState({
      thanks: thanks
    });
  };
  fetchAwards = async () => {
    const res = await fetch(`http://${process.env.HOST}/wp-json/wp/v2/award`);
    const awards = await res.json();
    this.setState({
      awards: awards
    });
  };

  render() {
    return (
      <LandingStyled>
        <Hero text='Support Group Network' />
        <JourneyCard
          name={this.state.journey.name}
          age={this.state.journey.age}
          memberSince={this.state.journey.member_since}
          image={this.state.journey.image}
          description={this.state.journey.description}
          slug={this.state.journey.slug}
        />
        <Awards awards={this.state.awards} />
        <ThankYou thanks={this.state.thanks} />
      </LandingStyled>
    );
  }
}
