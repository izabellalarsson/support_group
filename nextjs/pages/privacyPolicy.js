import React, { Component } from "react";
import Layout from "../components/Layout";
import PrivacyPolicy from "../components/PrivacyPolicy";
import LoadingPage from "../components/LoadingPage";

export default class PrivacyPolicyPage extends Component {
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
        <PrivacyPolicy />
      </Layout>
    );
  }
}
