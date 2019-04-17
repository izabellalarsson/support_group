import React, { Component } from "react";
import fetch from "isomorphic-unfetch";
import Layout from "../components/Layout";
import Journies from "../components/Journies";

export default class JourneyPage extends Component {
  static async getInitialProps(context) {
    const slug = context.query.slug;

    const res = await fetch(
      `http://${process.env.HOST}/wp-json/wp/v2/journey?slug=${slug}`
    );

    const journey = await res.json();
    // console.log(res);

    return {
      journey: journey[0]
    };
  }
  render() {
    // console.log(this.props.journey);
    return (
      <Layout>
        <Journies journey={this.props.journey} />
      </Layout>
    );
  }
}
