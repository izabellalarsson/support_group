import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import Title from '../Title'
import ReadMore from '../ReadMore'

const ProjectCardStyle = styled.div`
background-image: linear-gradient(#F3F5FF, white);
width: 100%;
height: 50vh;
margin: 0;

h1 {
    margin-top: 0;
}
`

const ProjectCard = ({props}) => {
    return (
        <ProjectCardStyle>
            <Title text='Orbus project'/>
            <ReadMore/>
        </ProjectCardStyle>
    );
};

ProjectCard.propTypes = {
    
};

export default ProjectCard;