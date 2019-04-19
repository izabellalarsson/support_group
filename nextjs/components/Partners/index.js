import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const PartnersStyled = styled.div`
display: grid;
grid-template-columns: auto auto auto;
grid-column-gap: 5%;
grid-row-gap: 5%;
margin: 30px;

img {
    width: 100%;
}

`
const Partners = ({ partners }) => {
    return (
        <PartnersStyled>
            {partners.map((partner, i) => {
                return <img key={i} src={partner.image} />
            })}
        </PartnersStyled>
    );
}

export default Partners;