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
        
    }
    section:nth-child(6){
       
        margin-top:370px;
    }
    

`
const SelectSignInStyled = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 0 15vw;
  height: 30px;
  button:nth-child(3) {
    text-align: right;
  }
  button:hover {
    cursor: pointer;
  }
`;
const SignInStyled = styled.section`
  width: 100%;
  height: 345px;
  background-color: var(--main-bg);
  transition: 0.3s linear;
  transform: ${props =>
    props.signIn
      ? "translateX(0)"
      : "translateX(100vw)"
      };

  div {
    display: flex;
    justify-content: flex-end;
  }
`;
const RegisterStyled = styled.section`
  width: 86%;
  background-color: var(--main-bg);
  height: 345px;
  transition: 0.3s linear;
  transform: ${props =>
    props.signIn ? "translateX(-100vw)" : "translateX(0)"
    };
  position: absolute;
  p {
    font-size: 14px;
    line-height: 20px;
  }
  p a {
    text-decoration: none;
    color: var(--detail-red);
  }
  div {
    display: flex;
    justify-content: flex-end;
  }
`;
const FormWrapperStyled = styled.section`
    width: 90vw;
    overflow-x: hidden;
    height: 355px;
    padding: 30px 5vw;
    display: flex;
`;

class Members extends Component {
    state = {
        signIn: true,
        buttonText: 'Sign In',
        journey: []
    }
    
    componentDidMount(){
        this.fetchRandomJournies();
    }

    fetchRandomJournies = async () => {
        const res = await fetch(`http://${process.env.HOST}/wp-json/wp/v2/journey`);
        const journies = await res.json();
        this.setState({
            journey: journies[Math.floor(Math.random() * journies.length)]
        }) 
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
                <SelectSignInStyled>
                    <RedLine place={this.state.signIn} />
                    <MembersChoices onClick={this.setTrue} text="SIGN IN"/>
                    <MembersChoices onClick={this.setFalse} text="SIGN UP"/>
                </SelectSignInStyled>
                <FormWrapperStyled >
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
                </FormWrapperStyled >
                <JourneyCard 
                    name = {this.state.journey.name}
                    age = {this.state.journey.age}
                    memberSince = {this.state.journey.member_since}
                    image={this.state.journey.image}
                    description={this.state.journey.description}
                    slug={this.state.journey.slug}
                />
                    
                
            </MembersStyled>
        );
    }
}

export default Members;