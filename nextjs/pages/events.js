import React, { Component } from "react";
import Layout from "../components/Layout";
import Events from "../components/Events";


export default class EventPage extends Component {
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

  render() {
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
        <Events />
      </Layout>
    );
  }
}
