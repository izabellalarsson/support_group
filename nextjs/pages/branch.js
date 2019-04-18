import React, { Component } from "react";
import Layout from "../components/Layout";
import Branches from "../components/Branches";
import LoadingPage from "../components/LoadingPage";

export default class BranchesPage extends Component {
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
        <Branches />
      </Layout>
    );
  }
}
