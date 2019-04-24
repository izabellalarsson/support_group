import React, { Component } from 'react';
import styled from 'styled-components';
import Title from '../Title';
import Text from '../Text';
import Form from './Form';
import BlueLine from '../BlueLine';
import Subheading from '../Subheading';

const MakeAChangeStyled = styled.div`
img {
    object-fit: cover;
    width: 100%;
    height: auto;
}
div:nth-child(5) {
    height: 50px;
    background-color: var(--main-bg);
}
div:nth-child(8){
    display: flex;
    justify-content: center;
    flex-flow: column;
    align-items: center;
    h2{
        margin-top: -5vh;
    }
}
div:nth-child(9){
    margin-top: 60px;
    display: flex;
    justify-content: center;
    flex-flow: column;
    align-items: center;

    img{
        width: 80%;
    }
    h2{
        margin-top: 5vh;
        width: 90%;
        text-align: center;
    }
    h2:nth-child(3){
        margin-top: -15px;
        margin-bottom: 60px;
    }

}
`



class MakeAChange extends Component {
    state = {
        page: []
    }
    componentDidMount(){
        this.fetchPage('make-a-change');
    }
    fetchPage = async (slug) => {
        const res = await fetch(`http://${process.env.HOST}/wp-json/wp/v2/pages?slug=${slug}]`);
        const page = await res.json();
        this.setState({
            page: page[0]
        })
    }
    render() {
        return (
            <MakeAChangeStyled>
                <img src={this.state.page.image} alt="make-a-change" />
                <Title text="We need your support" />
                <Text text="
                    As our members grow in numbers our needs increase. 
                    When we organise activities we have a need for 
                    partners and people who are willing to lend out 
                    their facilities and share their competences. 
                    If you are willing to help out, please contact us." />
                
                <Form />
                <div>
                    <BlueLine />
                </div>
                <Title text="Donations" />
                <Text text="As we are a non-profit organisation, donations are very welcome." />
                <div>
                    <img src="https://www.getswish.se/content/uploads/2018/07/swish_horizontal_main_rgb.png" alt="swish" />
                    <Subheading text="123 123 123 123" />
                </div>
                <div>
                    <img src="https://www.bankgirot.se/Content/images/bankgirot-logo.png" alt="bankgiro" />
                    <Subheading text="Bankgiro: 5138-5854" />
                    <Subheading text="Organization number: 802503-7097" />

                </div>
               
            </MakeAChangeStyled>
        );
    }
};


export default MakeAChange;
