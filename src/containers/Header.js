import React, {Component} from 'react';
import styled from 'styled-components';
import Container from '../themes/grid/Container';
// import './App.css';
const Image = styled.img`

`;

class Header extends Component {
  static propTypes = {};
  render() {

    const headerStyle = {
      textAlign: "center"
    }

    const headerTextStyle = {
      zIndex: "200",
      color: "white",
      fontSize: "32px"
    };


    return (
      <div>
          <header style={headerStyle}>
            <p style={headerTextStyle}>
              <br/>
              You made it! Welcome to my page!<br/>
              <br/>
              <strong>VIKTORIJA GJORGJIEVSKA</strong><br/>
              <br/>
              <strong>Full Stack Web Developer</strong><br/>
            </p>
          </header>
      </div>
    );
  }
}

export default Header;
