import React, { Component } from "react";
import Layout from "../components/Layout";
import Landing from "../components/Landing";
import LoadingPage from "../components/LoadingPage";

export default class indexPage extends Component {
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
        <Landing />
      </Layout>
    );
  }
}
