import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DropdownMainItem from '../DropdownMainItem'
import styled from 'styled-components'
import DropdownSecondaryItem from '../DropdownSecondaryItem';
import Arrow from '../Arrow';

const DropdownStyle = styled.div`
position:fixed;
display:flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
width: 100%;
height: 93vh;
transition: transform 0.5s ease;
transform: ${props => props.isClicked ? "translateX(0)" : "translateX(100vw)"};
top: 7vh;
background: #F3F5FF;

.Dropdown-Main-Item {
    padding-top: 30px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-direction: column;
    width: 100%;
}

.Dropdown-Secondary-Item {
    margin-bottom: 50px;
    align-self: flex-start;
}



`

class Dropdown extends Component {
    constructor(props) {
        super(props),
        
        this.state = {
            isClicked: this.props.isClicked, 
            handleClickMenu: this.props.handleClickMenu,
            pages: []
        }
        this.fetchPages();
        

    }

    fetchPages = async () => {
        const pagesApi = `http://${process.env.HOST}/wp-json/wp/v2/pages`;
        const response = await fetch(pagesApi);
        const data = await response.json();
        this.setState ({
            pages: data
        }) 

    }

    render() {
        return (
            <DropdownStyle isClicked={this.props.isClicked}>
                <nav className="Dropdown-Main-Item">
                    {this.state.pages.map((page, i) => {
                        return (
                            <DropdownMainItem 
                                text={page.title.rendered} 
                                link={`/${page.slug}`}
                                handleClickMenu={this.state.handleClickMenu} />
                        )
                    })}
                </nav>
                <nav className="Dropdown-Secondary-Item">
                    <DropdownSecondaryItem text="Language" link="/" handleClickMenu={this.state.handleClickMenu}/>
                    <DropdownSecondaryItem text="Accessability" link="/hej" handleClickMenu={this.state.handleClickMenu}/>
                    <DropdownSecondaryItem text="Help" link="/" handleClickMenu={this.state.handleClickMenu}/>
                </nav>
            </DropdownStyle>
                
            
        )
    }




};

Dropdown.propTypes = {
    
};

export default Dropdown;