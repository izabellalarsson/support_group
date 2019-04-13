import React, { Component } from 'react';
import styled from 'styled-components';
import RedLine from './RedLine';
import MembersChoices from './MembersChoices';

const MembersStyled = styled.div`
    img {
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
            </MembersStyled>
        );
    }
}

export default Members;