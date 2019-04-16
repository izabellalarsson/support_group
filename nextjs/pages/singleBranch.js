
import React, { Component } from 'react'
import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';
import Title from '../components/Title';
import Text from '../components/Text';

class BranchPage extends Component {

    constructor(props){
        super()
        const slug = props.url.query.slug;
        const newBranch = props.branches.filter(branch => {
            return (branch.slug === slug)
        })
        
        this.state = {
            notFound: false,
            branch: newBranch[0],
            activities: []
        }

        // Check if slug excists
        if (newBranch.length < 1) {
            //Redirect to 404;
            console.log('hej');
            this.state = {
                notFound: true
            }
        }else{
            const activitiesApi = this.state.branch._links['wp:term'][0].href
            //console.log(activitiesApi);
            fetch(activitiesApi)
            .then(res => res.json())
            .then(activities => {
                this.setState({
                    activities: activities
                })
            })
        }    
    }

    
    render () {
        return (
            
            <Layout>
                {this.state.notFound && 
                <div>
                    <Title text={'Branch Not Found'} /> 
                    <Text text="Please try again" />
                </div>
                } 

                {!this.state.notFound && 
                    <div>
                        <Title text={this.state.branch.title.rendered} />
                        {
                            this.state.activities.map(activity => {
                                console.log(activity.name)
                                return <Text text={activity.name} />
                            })
                        }
                    </div>
                }
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