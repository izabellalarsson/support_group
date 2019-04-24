import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProjectCard from './ProjectCard';

export default class Projects extends Component {

    state = {
        projects: []
    }

    componentDidMount () {
        this.fetchProjects()
    }

    fetchProjects = () => {
        const projectApi = `http://${process.env.HOST}/wp-json/wp/v2/project`;

        fetch(projectApi)
        .then(res => res.json())
        .then(projects => {
            projects.map(project => {
                this.setState({
                    projects: [...this.state.projects,{
                        id: project.id,
                        title: project.name,
                        description: project.description,
                        date: project.date,
                        imageUrl: project.image,
                        link: project.slug,
                        purpose: project.purpose,
                        goal: project.goal,
                        type: project.type,
                    }]
                })
            })

        })
    }


    splitWord = (str) => {
        const date = new Date(str);
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        };
        
        let word = date.toLocaleDateString('en-EN', options)
        return word;
    }

    getExcerpted = (str, limit) => {
        let fullText = str;
        let shortText = str;
        shortText = shortText.substr( 0, shortText.lastIndexOf( ' ', limit ) ) + '...';
        let returnString = {
            fullText: fullText,
            shortText: shortText
        };

        return returnString;
    }



  render() {
    return (
      <div>
        {this.state.projects.map((project, i) => (
            <ProjectCard id={project.id}
                         title={project.title}
                         description={this.getExcerpted(project.description, 200).shortText}
                         key={i}
                         date={this.splitWord(project.date)}
                         imageUrl={project.imageUrl}
                         link={project.link}
                         purpose={project.purpose}
                         goal={project.goal}
                         type={project.type}/>
        ))}
      </div>
    )
  }
}
