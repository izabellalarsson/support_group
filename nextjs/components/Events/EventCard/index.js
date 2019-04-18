import React from 'react';
import styled from 'styled-components';
import Title from '../../Title';
import Text from '../../Text';
import BlueLine from '../../BlueLine';
import ReadMore from '../../ReadMore';
import Subheading from '../../Subheading';


const EventCardStyled = styled.div`
    section:nth-child(2) {
        display: flex;
        flex-flow: column;
        align-items: flex-start;
        justify-content: space-around;
        background: var(--main-bg);
        padding-top: 40px;
        margin-top: -20px;
        img{
            width: 100%;
            height: 40vh;
            object-fit: cover;
            object-position: 50% 50%;
        }
        h2{
            margin: 30px;
        }
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
    div:nth-child(2){
        
    }  
`
const LocationContainerStyled = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 30px;
    padding-bottom: 15px;
    div {
        padding: 0;
        display: flex;
        flex-flow: column;
        margin-left: 20px;
        font-size: 10px;
        p {
            padding: 0;
            margin: 0;
        }
    }
`
const EventCard = ({date, name, text, adress, image, city}) => {
    return (
        <EventCardStyled>
            <Title text={date} />
            <section>
                <img src={image} alt="event picture" />
                <Subheading text={name}  />
            </section>
            <section>
                <Text text={text} />
                
                <LocationContainerStyled>
                    <svg height="21" width="17" xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" d="M14 8.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0zm.968 5.516a8.5 8.5 0 1 0-12.935 0L2 14l6.5 7 6.5-7-.032.016z" fill="#EE7171" fillRule="evenodd"/></svg>
                    <div>
                        <p>{city}</p>
                        <p>{adress}</p>
                    </div>
                </LocationContainerStyled>
                <BlueLine />
            </section>
            <section>

            </section>
        </EventCardStyled>
    );
};

export default EventCard;