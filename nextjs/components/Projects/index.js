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
<<<<<<< HEAD
        const projectApi = 'http://sgn.test/wp-json/wp/v2/project';
=======
        const projectApi = `http://${process.env.HOST}/wp-json/wp/v2/project`;
>>>>>>> c73a551e9ccac43ca6f3e8210b5f8ba9460fbc0d

        fetch(projectApi)
        .then(res => res.json())
        .then(projects => {
            projects.map(project => {
                this.setState({
                    projects: [...this.state.projects,{
                        id: project.id,
                        title: project.title.rendered,
                        description: project.content.rendered,
                        date: project.date,
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


  render() {
    return (
      <div>
        {this.state.projects.map((project, i) => (
            <ProjectCard title={project.title}
                         description={project.description}
                         key={i}
                         date={this.splitWord(project.date)}/>
        ))}
      </div>
    )
  }
}
