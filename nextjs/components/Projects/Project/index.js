import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TitleProject from './TitleProject'
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

hr {
    width: 100%;
    padding-top: 0px;
}

`
const Project = ({imageUrl, description, name, purpose, goal}) => {
    return (
        <ProjectStyle>
            <img src={imageUrl}/>
            <div>
                <TitleProject text={name} padding="padding"/>
                <Text text={description}/>
                <BlueLine/>
                {(purpose == undefined) ? null :
                    <div>
                        <TitleProject text="Purpose"/>
                        <Text text={purpose}/>
                        <BlueLine/>
                    </div>
                }
                {(goal == undefined) ? null :
                    <div>
                        <TitleProject text="Goal"/>
                        <Text text={goal}/>
                        <BlueLine/>
                    </div>
                }

            </div>
        </ProjectStyle>
    );
};

Project.propTypes = {
    
};

export default Project;