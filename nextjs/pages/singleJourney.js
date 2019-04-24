import React, { Component } from "react";
import fetch from "isomorphic-unfetch";
import Layout from "../components/Layout";
import Journies from "../components/Journies";

import NotFound from "../components/NotFound";

export default class JourneyPage extends Component {
  constructor(props) {
    super();

    const slug = props.url.query.slug;

    const newJourney = props.journey.filter(journey => {
      return journey.slug === slug;
    });
    this.state = {
      journey: newJourney[0],
      isLoading: true,
      notFound: false,
      working: true
    };

    if (newJourney.length < 1) {
      this.state = {
        notFound: true
      };
    }
  }

  componentDidMount() {
    this.setState({
      isLoading: false
    });
  }
  render() {
    return this.state.isLoading ? (
      <div
        style={{
          width: 100 + "%",
          fontFamily: "Aktiv Grotesk",
          height: 100 + "vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        Loading...
      </div>
    ) : (
      <Layout>
        {this.state.notFound && <NotFound />}
        {!this.state.notFound && <Journies journey={this.state.journey} />}
      </Layout>
    );
  }
}
JourneyPage.getInitialProps = async function() {
  const res = await fetch(`http://${process.env.HOST}/wp-json/wp/v2/journey`);
  const journey = await res.json();
  return {
    journey: journey
  };
};
