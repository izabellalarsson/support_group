import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import Title from '../../Title'
import Text from '../../Text'
import DateText from '../DateText'
import ReadMore from '../../ReadMore'

const ProjectCardStyle = styled.div`
background-image: linear-gradient(#F3F5FF, white);
width: 100%;
margin: 0;
display: flex;
flex-direction: column;

h1 {
    margin-top: 0;
}

.blue-line {
    border: 1px solid #B9C4EA;
    width: 92%;
    margin-right: 0;
    margin-bottom: 0;
}
`

const ProjectCard = ({title, description, date}) => {
    return (
        <ProjectCardStyle>
            <Title text={title}/>
            <DateText text={date}/>
            <Text text={description}/>
            <ReadMore/>
            <hr className="blue-line"/>
        </ProjectCardStyle>
    );
};

ProjectCard.propTypes = {
    
};

export default ProjectCard;