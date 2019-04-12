import React from 'react';
import styled from 'styled-components';
import Title from '../Title';
import Text from '../Text';
import Form from './Form';

const MakeAChangeStyled = styled.div`
img {
    object-fit: cover;
    width: 100%;
    height: auto;
}
`


const MakeAChange = () => {
    return (
        <MakeAChangeStyled>
            <img src="" alt="support" />
            <Title text="We need your support" />
            <Text text="
                As our members grow in numbers our needs increase. 
                When we organise activities we have a need for 
                partners and people who are willing to lend out 
                their facilities and share their competences. 
                If you are willing to help out, please contact us." />
            
            <Form />
            
        </MakeAChangeStyled>
    );
};


export default MakeAChange;
