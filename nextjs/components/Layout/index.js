import React, { Component } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import GlobalStyle from '../../styles'
import Head from 'next/head';
import dotenv from 'dotenv'
import CookiePolicy from '../CookiePolicy';

dotenv.config();
class Layout extends Component {
	state = {
		isCookiesApproved: false
	}

	cookieButtonClick = () => {
		setState({
			isCookiesApproved: true
		})
	}

	render() {
		const { children } = this.props
		return (
			<div style={{transition: '1s linear'}}>
				<GlobalStyle/>
				<Head>
					<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
    				integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous"/>
					<link href="https://fonts.googleapis.com/css?family=Rubik:400,700" rel="stylesheet" />
					<title>Support Group Network</title>
				</Head>
				<Header/>
				<CookiePolicy isCookiesApproved={this.state.isCookiesApproved} cookieButtonClick={this.cookieButtonClick}/>
				    {children}
				<Footer/>
			</div>
		)
	}
}

export default Layout