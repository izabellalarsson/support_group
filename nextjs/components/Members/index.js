import React, { Component } from 'react';
import styled from 'styled-components';
import RedLine from './RedLine';
import MembersChoices from './MembersChoices';
import InputField from './InputField';
import Button from '../Button';
import Title from '../Title';
import Text from '../Text';
import BlueLine from '../BlueLine';
import ReadMore from '../ReadMore';
import Subheading from '../Subheading';

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
    section:nth-child(4){
        background-color: white;
        margin-bottom: 60px;
        div:nth-child(2){
            margin-top: 40px;
            margin-bottom: 40px;
            padding-left: 30px;
            display: grid;
            grid-template-columns: 1fr 1fr;
        }
        img{
            width: 100%;
            height: auto;
        }
        div:nth-child(4){
            display: flex;
            justify-content: flex-end;
            /* padding-right: 30px; */
        }
    }
    
`

class Members extends Component {
    state = {
        signIn: true
    }

    setTrue= () => {
        this.setState({
            signIn: true
        });
    }
    setFalse= () => {
        this.setState({
            signIn: false
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
                        <Button text="Continue" />
                    </div>
                </section>
                <section>
                    <Title text="This is my SGN journey" />
                    <div>
                        <div>
                            <Subheading text="Pretty Boy Floyd" />
                            <Subheading text="25 years" />
                            <Subheading text="Member since 2015" />
                        </div>
                        <img src="https://c.pxhere.com/photos/f7/4c/smile_profile_face_male_portrait_young_person_glasses-451655.jpg!d" alt="person" />
                    </div>
                    <Text text="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
                    <div>
                        <ReadMore />
                    </div>
                    <BlueLine />
                </section>
            </MembersStyled>
        );
    }
}

export default Members;