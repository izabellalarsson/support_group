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
        p:first-child{
            padding-bottom: 20px;

        }

    }
    section:nth-child(4){
        height: 30px;
    }
    i {
        color: var(--detail-red);
    }
    div:nth-child(2){
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding-left: 30px;
        padding-bottom: 15px;
    }
    p:nth-child(2){
        margin-left: 20px;
        font-size: 10px;
    }
    
    
`
const EventCard = ({date, name, text, adress}) => {
    return (
        <EventCardStyled>
            <Title text={date} />
            <section>
                <img src="http://www.dummyimage.com/1500x500/56AA56/000" alt="event picture" />
                <Subheading text={name}  />
            </section>
            <section>
                <Text text={text} />
                
                <div>
                    <svg height="21" width="17" xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" d="M14 8.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0zm.968 5.516a8.5 8.5 0 1 0-12.935 0L2 14l6.5 7 6.5-7-.032.016z" fill="#fff" fillRule="evenodd"/></svg>
                    <p>{adress}</p>
                </div>
                <BlueLine />
            </section>
            <section>

            </section>
        </EventCardStyled>
    );
};

export default EventCard;