import React, { Component } from "react";
import Header from "../Header";
import Footer from "../Footer";
import GlobalStyle from "../../styles";
import Head from "next/head";
import dotenv from "dotenv";
import LoadingPage from "../LoadingPage";
import CookiePolicy from "../CookiePolicy";

dotenv.config();

class Layout extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      isCookiesApproved: true
    };
  }

  componentDidMount() {
    this.setState({
      isLoading: false
    });
  }

  componentWillMount() {}

  cookieButtonClick = () => {
    setState({});
  };

  render() {
    const { children } = this.props;
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
          <title>Support Group Network </title>
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
            Loading...
          </div>
        ) : (
          <div>
            <Header />
            <CookiePolicy
              isCookiesApproved={this.state.isCookiesApproved}
              cookieButtonClick={this.cookieButtonClick}
            />
            {children}
            <Footer />
          </div>
        )}
      </div>
    );
  }
}

export default Layout;
