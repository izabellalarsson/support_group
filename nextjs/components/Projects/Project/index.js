import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Title from '../../Title';
import Text from '../../Text';
import BlueLine from '../../BlueLine'

const ProjectStyle = styled.div`
background: #F3F5FF;
width: 100%;
img {
    object-fit: cover;
    width: 100%;
    height: auto;
}

> div {
    position: relative;
    background-color: #F3F5FF;
    margin-left: 30px;
    margin-top: -25%;
    padding:0;
}

h1 {
    padding-top: 50px;
}

hr {
    width: 100%;
}

`
const Project = ({imageUrl, description, name, purpose, goal}) => {
    return (
        <ProjectStyle>
            <img src={imageUrl}/>
            <div>
                <Title text={name}/>
                <Text text={description}/>
                <BlueLine/>
                <Text text={purpose}/>
                <BlueLine/>
                <Text text={goal}/>
            </div>
        </ProjectStyle>
    );
};

Project.propTypes = {
    
};

export default Project;