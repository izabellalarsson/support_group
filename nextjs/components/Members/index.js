import React, { Component } from 'react';
import styled from 'styled-components';
import RedLine from './RedLine';
import MembersChoices from './MembersChoices';
import InputField from './InputField';
import Button from '../Button';
import Text from '../Text';
import JourneyCard from './JourneyCard';
import Link from 'next/link'


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
    section:nth-child(5){
       
        margin-top:370px;
    }
    

`
const SignInStyled = styled.section`
    width: 86%;
    height: 335px;
    padding: 40px 30px;
    background-color: var(--main-bg);
    transition: .3s linear;
    transform: ${props => props.signIn ? 'translateX(0)' : 'translateX(100vw)'};
    position: absolute;
    div{
        display:flex;
        justify-content: flex-end;
    }
`
const RegisterStyled = styled.section`
    background-color: var(--main-bg);
    height: 335px;
    padding: 40px 30px;
    transition: .3s linear;
    transform: ${props => props.signIn ? 'translateX(-100vw)' : 'translateX(0)'};
    position: absolute;
    p {
        font-size: 14px;
        line-height: 20px;
    }
    p a{
        text-decoration: none;
        color: var(--detail-red);
    }
    div{
        display:flex;
        justify-content: flex-end;
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

                <SignInStyled signIn={this.state.signIn} >
                    <InputField name="email" type="email" placeholder="Email" />
                    <InputField name="password" type="password" placeholder="Password" />
                    <div>
                        <Button text="Sign In" />
                    </div>
                </SignInStyled>

                <RegisterStyled signIn={this.state.signIn} >
                    <InputField name="name" type="text" placeholder="Name" />
                    <InputField name="email" type="email" placeholder="Email" />
                    <InputField name="password" type="password" placeholder="Password" />
                    <InputField name="repeat-password" type="password" placeholder="Repeat Password" />
                    <p>By clicking register, you agree to Support group networks <Link href='/privacypolicy'><a href='/privacypolicy'>user agreements and privacy policy</a></Link></p>
                    <div>
                        <Button text="Register" />
                    </div>
                </RegisterStyled>
                
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