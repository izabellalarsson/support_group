
import React, { Component } from 'react'
import Layout from '../components/Layout';

import BranchCard from '../components/BranchCard'
import fetch from 'isomorphic-unfetch';

class BranchPage extends Component {

    constructor(props){
        super()
        const slug = props.url.query.slug;
        //console.log(props)
        const newBranch = props.branches.filter(branch => {
            return (branch.slug === slug)
        })
        this.state = {
            branch: newBranch[0]
        }
        console.log(this.state.branch);

        //this.handleClick = this.handleClick.bind(this)
    }

    
    render () {
        return (
            <Layout>
                <h1>{this.state.branch.title.rendered}</h1>
            </Layout>
        )
    }
}




BranchPage.getInitialProps = async function () {
    const res = await fetch(`http://${process.env.HOST}/wp-json/wp/v2/branch`)
    const data = await res.json();
    return {
        branches: data
    }
}


export default BranchPage;