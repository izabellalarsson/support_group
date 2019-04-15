import React, { Component } from 'react';
import styled from 'styled-components';
import Title from '../Title';
import Text from '../Text';
import Form from './Form';
import BlueLine from '../BlueLine';

const MakeAChangeStyled = styled.div`
img {
    object-fit: cover;
    width: 100%;
    height: auto;
}
div:last-child {
    height: 50px;
    background-color: var(--main-bg);
}
`



class MakeAChange extends Component {
    render() {

        return (
            <MakeAChangeStyled>
                <img src="https://mensline.org.au/wp-content/uploads/2018/04/supportheader.jpg" alt="support" />
                <Title text="We need your support" />
                <Text text="
                    As our members grow in numbers our needs increase. 
                    When we organise activities we have a need for 
                    partners and people who are willing to lend out 
                    their facilities and share their competences. 
                    If you are willing to help out, please contact us." />
                
                <Form />
                <div>
                    <BlueLine />
                </div>
            </MakeAChangeStyled>
        );
    }
};


export default MakeAChange;
