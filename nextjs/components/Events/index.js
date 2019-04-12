import React, { Component } from 'react';
import styled from 'styled-components';
import EventCard from './EventCard';

const EventsStyled = styled.div`
    

`


class Events extends Component {
    render() {
        return (
            <EventsStyled>
                <EventCard  name="Pers Name" 
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