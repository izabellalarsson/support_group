import React, { Component } from 'react';
import styled from 'styled-components';
import EventCard from './EventCard';
import Title from '../Title';
import Text from '../Text';


const EventsStyled = styled.div`
    p:nth-child(2){
        padding-bottom: 0;
    }

`


class Events extends Component {
    render() {
        return (
            <EventsStyled>
                <Title text="Events schedule" />
                <Text text="Welcome to read about our events. Here you can easely follow our journey to make a difference and also be a part of it!" />
                <EventCard  date="March 18"
                        name="Pers Name" 
                        text="There are many people who cannot 
                        write and read their mother tongue. 
                        Also others from different nationalities are 
                        interested in Arabic. When Support Group Network 
                        at Restad Gård does this course Everyone 
                        is welcome to register."
                        adress="Kungsladugårdsgatan 5, Vänersborg"/>
            </EventsStyled>
        );
    }
}

export default Events;