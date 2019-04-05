import React, { Component } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import GlobalStyle from '../../styles'
import Head from 'next/head';
import dotenv from 'dotenv'

dotenv.config();
class Layout extends Component {
	render() {
		const { children } = this.props
		return (
			<div>
				<GlobalStyle/>
				<Head>
					<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
    				integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous"/>
   					 <title>hej App</title>
				</Head>
				<Header/>
				    {children}
				<Footer/>
			</div>
		)
	}
}

export default Layout