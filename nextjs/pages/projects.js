import React, { Component } from "react";
import Layout from "../components/Layout";
import Projects from "../components/Projects";
import LoadingPage from "../components/LoadingPage";

export default class ProjectsPage extends Component {
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
        <Projects />
      </Layout>
    );
  }
}
