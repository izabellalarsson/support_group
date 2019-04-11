import React, { Component } from 'react'
import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';
import Title from '../components/Title'
import Text from '../components/Text'
import Project from '../components/Projects/Project'

class ProjectPage extends Component {

    constructor(props){
        super()
        const slug = props.url.query.slug;
        // console.log(props)
        const newProject = props.projects.filter(project => {
            return (project.slug === slug)
        })
        this.state = {
            project: newProject[0]
        }
        console.log(this.state.project);

        //this.handleClick = this.handleClick.bind(this)
    }

    render () {
        return (
            <Layout>
                <Project name={this.state.project.name}
                         imageUrl={this.state.project.image}
                         description={this.state.project.description}
                         purpose={this.state.project.purpose}
                         goal={this.state.project.goal}
                         headlinePurpose={this.state.project.headlinepurpose}
                         headlineGoal={this.state.project.headlinegoal}/>
            </Layout>
        )
    }
}




ProjectPage.getInitialProps = async function () {
    const res = await fetch(`http://${process.env.HOST}/wp-json/wp/v2/project`)
    const data = await res.json();
    return {
        projects: data
    }
}


export default ProjectPage;