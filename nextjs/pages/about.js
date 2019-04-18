import React, { Component } from "react";
import Layout from "../components/Layout";
import About from "../components/About";
import LoadingPage from "../components/LoadingPage";

export default class AboutPage extends Component {
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
        <About />
      </Layout>
    );
  }
}
