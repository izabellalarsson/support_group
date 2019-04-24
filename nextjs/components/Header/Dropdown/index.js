import React, { Component } from "react";
import PropTypes from "prop-types";
import DropdownMainItem from "../DropdownMainItem";
import styled from "styled-components";
import DropdownSecondaryItem from "../DropdownSecondaryItem";
import nookies from 'nookies'

const DropdownStyle = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: ${props => (props.isClicked ? "93vh" : "93vh")};
  overflow: scroll;
  transition: transform 0.5s ease;
  opacity: 0;
  transform: ${props =>
    props.isClicked ? "translateX(0); opacity: 1;" : "translateX(100vw);"};
  top: 7vh;
  background: #f3f5ff;

  .Dropdown-Main-Item {
    padding-top: 15px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-direction: column;
    width: 100%;
  }

  .Dropdown-Secondary-Item {
    /* margin-bottom: 50px; */
    align-self: flex-start;
  }
`;

class Dropdown extends Component {
  constructor(props) {
    super(props),
      (this.state = {
        isClicked: this.props.isClicked,
        handleClickMenu: this.props.handleClickMenu,
        pages: [],
        isHighContrast: null,
        isLargeLetters: null
      });
    this.fetchPages();
  }
  static async getInitialProps(ctx) {
        this.setState({
            ctx: ctx
        });
    }

  // Get cookies from storage and updating state
  componentDidMount () {
      this.setState({
          isHighContrast: nookies.get(this.state.ctx).contrast === 'true' ? true : false,
          isLargeLetters: nookies.get(this.state.ctx).letters === 'true' ? true : false
      })
  }
  
  // 
  handleSwitchHighContrast = () => {
        this.setState({
        isHighContrast: !this.state.isHighContrast
        });
        nookies.set(
        this.state.ctx,
        'contrast',
        !this.state.isHighContrast,
        {
            maxAge: 30 * 24 * 60 * 60,
            path: '/'
        }
        );
        //document.location.reload();
    }

    handleSwitchLargeLetters = () => {
        this.setState({
        isLargeLetters: !this.state.isLargeLetters
        })
        nookies.set(
        this.state.ctx,
        'letters',
        !this.state.isLargeLetters,
        {
            maxAge: 30 * 24 * 60 * 60,
            path: '/'
        }
        );
    }
  // Fetching pages from RestApi and sorting
  fetchPages = async () => {
    const pagesApi = `http://${process.env.HOST}/wp-json/wp/v2/pages`;
    const response = await fetch(pagesApi);
    let pages = await response.json();
    // Sorting pages by menu_order from WP
    const compare = (a, b) => {
      if (a.menu_order < b.menu_order) {
        return -1;
      }
      if (a.menu_order > b.menu_order) return 1;
      return 0;
    };
    pages.sort(compare);

    //Removing Landing Page
    pages = pages.filter(page =>{
      
      return (page.slug !== "landing");
    })
    this.setState({
      pages: pages
    });
  };

  handleClickSettings = () => {
    this.setState({
      isClicked: !this.state.isClicked
    });
  };

  render() {
    return (
      <DropdownStyle isClicked={this.props.isClicked}>
        <nav className='Dropdown-Main-Item'>
          {this.state.pages.map((page, i) => {
            return (
              <DropdownMainItem
                text={page.title.rendered}
                link={`/${page.slug}`}
                handleClickMenu={this.state.handleClickMenu}
                key={i}
              />
            );
          })}
        </nav>
        <nav className='Dropdown-Secondary-Item'>
          <DropdownSecondaryItem
            link='/'
            handleClickMenu={this.state.handleClickMenu}
            isClicked={this.state.isClicked}
            handleClickSettings={this.handleClickSettings}
            handleSwitchLargeLetters={this.handleSwitchLargeLetters}
            isLargeLetters={this.state.isLargeLetters}
            handleSwitchHighContrast={this.handleSwitchHighContrast}
            isHighContrast={this.state.isHighContrast}
          />
        </nav>
      </DropdownStyle>
    );
  }
}

Dropdown.propTypes = {};

export default Dropdown;
