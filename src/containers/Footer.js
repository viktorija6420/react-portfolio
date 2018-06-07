import React, {Component} from 'react';
import styled from 'styled-components';
import Container from '../themes/grid/Container';
// import './App.css';
const Image = styled.img`

`;

class Footer extends Component {
  static propTypes = {};
  render() {

    const footerStyle = {
      textAlign: "center",
      backgroundColor: "#FFDE80"
    }

    return (

      <div>
            <p style={footerStyle}>
             <strong>Let&apos;s connect!</strong>
             <br/>
             <a href="https://www.linkedin.com/in/viktorija-gjorgjievska/">LinkedIn</a>
             <br/>
             <a href="https://github.com/viktorija6420">GitHub</a>
            <br/>Email: viktorija.gjorgjievska@gmail.com
          </p>
      </div>
    );
  }
}

export default Footer;
