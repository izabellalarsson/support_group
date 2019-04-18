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
    return (
      <Layout>
        {this.state.isLoading && <LoadingPage />}
        <PrivacyPolicy />
      </Layout>
    );
  }
}
