import React, { Component } from "react";
import fetch from "isomorphic-unfetch";
import Layout from "../components/Layout";
import Journies from "../components/Journies";
import LoadingPage from "../components/LoadingPage";

export default class JourneyPage extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true
    };
  }

  componentDidMount() {
    this.setState({
      isLoading: false
    });
  }
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
    return this.state.isLoading ? (
      <div
        style={{
          width: 100 + "%",
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
        <Journies journey={this.props.journey} />
      </Layout>
    );
  }
}
