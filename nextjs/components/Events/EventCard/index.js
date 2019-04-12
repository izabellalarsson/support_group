import React from 'react';
import styled from 'styled-components';
import Title from '../../Title';
import Text from '../../Text';
import BlueLine from '../../BlueLine';
import ReadMore from '../../ReadMore';


const EventCardStyled = styled.div`
    section:nth-child(2) {
        background: var(--main-bg);
        padding: 40px 30px;
        height: 100px;
        margin-top: -20px;
    }
    section:nth-child(3) {
        background: white;

    }
    section:nth-child(4){
        height: 30px;
    }
    i {
        color: var(--detail-red);
    }
    div:nth-child(3){
        display: flex;
        justify-content: center;
        align-items: center;
        padding-left: 30px;
        div:last-child{
            margin-bottom: 6%;
        }
    }
    p:nth-child(2){
        margin-left: 20px;
    }
    
    
`
const EventCard = ({name, text, adress}) => {
    return (
        <EventCardStyled>
            <Title text={name} />
            <section>
                <img src="" alt="event picture" />
            </section>
            <section>
                <Text text={text} />
                <BlueLine />
                <div>
                    <i class="fas fa-map-marker-alt" />
                   
                    <p>{adress}</p>
                    
                    <ReadMore className="margin-up"/>
                </div>
                <BlueLine />
            </section>
            <section>

            </section>
        </EventCardStyled>
    );
};

export default EventCard;