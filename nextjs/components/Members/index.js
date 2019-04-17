import React, { Component } from 'react';
import styled from 'styled-components';
import RedLine from './RedLine';
import MembersChoices from './MembersChoices';
import InputField from './InputField';
import Button from '../Button';
import JourneyCard from './JourneyCard';

const MembersStyled = styled.div`
    background-color: var(--main-bg);
    img:nth-child(1) {
        width: 100%;
        height: auto;
        mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 30%, rgba(0,0,0,0));
    }
    section:nth-child(2){
        display: flex;
        justify-content: space-between;
        padding: 0 15vw;
        height: 30px;

        button:nth-child(3){
            text-align: right;
        }
        button:hover{
            cursor: pointer;
        }
    }
    section:nth-child(3){
        background-color: var(--main-bg);
        padding: 40px 30px;

        div:nth-child(4){
            display:flex;
            justify-content: flex-end;
        }
    }
    
    
`

class Members extends Component {
    state = {
        signIn: true,
        buttonText: 'Sign In'
    }

    setTrue= () => {
        this.setState({
            signIn: true,
            buttonText: 'Sign In'
        });
    }
    setFalse= () => {
        this.setState({
            signIn: false,
            buttonText: 'Register'
        });
    }

    render() {
        return (
            <MembersStyled>
                <img src="https://s3-ap-southeast-2.amazonaws.com/media1.mydeal.com.au/blog/post/blog_image_20180219221810890.jpg" alt="members" />
                <section>
                    <RedLine place={this.state.signIn} />
                    <MembersChoices onClick={this.setTrue} text="SIGN IN"/>
                    <MembersChoices onClick={this.setFalse} text="SIGN UP"/>
                </section>
                <section>
                    <InputField name="name" type="text" placeholder="Name" />
                    <InputField name="email" type="email" placeholder="Email" />
                    <InputField name="password" type="password" placeholder="Password" />
                    <div>
                        <Button text={this.state.buttonText} />
                    </div>
                </section> 
                <JourneyCard 
                    name = "Mahmood Younes"
                    age = "21"
                    memberSince = "2015"
                    src="https://assets.pando.com/_versions/2012/02/8-markpinc-mark-pincus-is-the-founder-and-ceo-of-zynga-and-was-an-early-investor-in-facebook-maybe-murdoch-really-likes-farmville-after-rupert-started-following-him-pincus-gave-him-a-s1_featured.jpeg" / >
                    
                
            </MembersStyled>
        );
    }
}

export default Members;