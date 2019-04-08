
import React, { Component } from 'react'
import Layout from '../components/Layout';
//import BranchPage from '../components/BranchPage';

// const BranchPage = (props) => {
//     const slug = props.url.query.slug;


//     props.branches.map(branch => {
//         if (branch.slug === slug){
//             console.log('hej')
//         }
//         return (branch.slug == slug)
//     })




//     return (
//         <Layout>
//             <h1>Branches</h1>
//         </Layout>
//     );
// } 

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
    const res = await fetch('http://sgn.test/wp-json/wp/v2/branch')
    const data = await res.json();
    return {
        branches: data
    }
}


export default BranchPage;