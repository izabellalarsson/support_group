import React, { Component } from "react";
import Header from "../Header";
import Footer from "../Footer";
import GlobalStyle from "../../styles";
import Head from "next/head";
import dotenv from "dotenv";
import LoadingPage from "../LoadingPage";
import CookiePolicy from '../CookiePolicy';
import nookies from 'nookies'

dotenv.config();

class Layout extends Component {
  constructor() {

      super();
      this.state = { 
      isLoading: true,
      isCookiesApproved: null
    };
  }
  static async getInitialProps(ctx) {
    this.setState({
      ctx: ctx
    });

  }

  componentDidMount() {
    this.setState({
      isLoading: false,
      isCookiesApproved: nookies.get(this.state.ctx).approvedCookies
    });

  }

  componentWillMount() {}


  handleCookieButtonClick = () => {
	
  	this.setState({
		  isCookiesApproved: true
    });
    nookies.set(
      this.state.ctx,
      'approvedCookies',
      true, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/'
      }
    );
  }


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
          <link rel="shortcut icon" type="image/x-icon" href="/static/favicon.ico" />
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
            <CookiePolicy isCookiesApproved={this.state.isCookiesApproved} handleCookieButtonClick={this.handleCookieButtonClick}/>
            {children} 
            <Footer />
          </div>
        )}
      </div>
    );
  }
}

export default Layout;
