import React, { Component } from "react";
import Header from "../Header";
import Footer from "../Footer";
import GlobalStyle from "../../styles";
import Head from "next/head";
import dotenv from "dotenv";
import LoadingPage from "../LoadingPage";

dotenv.config();

class Layout extends Component {
  constructor() {
    super();
    this.state = { isLoading: true };
  }

  componentDidMount() {
    this.setState({
      isLoading: false
    });
  }

  componentWillMount() {}

  render() {
    const { children } = this.props;

    console.log(this.state.isLoading);
    return (
      <div>
        <GlobalStyle />
        <Head>
          <link
            rel='stylesheet'
            href='https://use.fontawesome.com/releases/v5.8.1/css/all.css'
            integrity='sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf'
            crossorigin='anonymous'
          />
          <link
            href='https://fonts.googleapis.com/css?family=Rubik:400,700'
            rel='stylesheet'
          />
          <title> hej App </title>
        </Head>
        {this.state.isLoading ? (
          <div
            style={{
              width: 100 + "%",
              height: 100 + "vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            hej
          </div>
        ) : (
          <div>
            <Header /> {children} <Footer />
          </div>
        )}
      </div>
    );
  }
}

export default Layout;
