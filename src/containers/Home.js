import React, {Component} from 'react';
import styled from 'styled-components';
import Container from '../themes/grid/Container';
// import './App.css';
const Image = styled.img`

`;

class Home extends Component {
  static propTypes = {};
  render() {
    const allElementsStyle = {

    }
    const htmlStyle = {
      boxSizing: "border-box"
    }

    const bodyStyle = {
      backgroundSize: "cover"
    }

    const profileStyle = {
      // background: "rgba(0, 0, 0, 0.8)",
      backgroundColor:" #FFDE80",
      overflow: "hidden"
    }

    const divStyle = {
      backgroundColor: "#FFDE80"
    }

    const pictureStyle = {
    }

    const headerStyle = {
      textAlign: "center",
      backgroundImage: `url(require(../assets/beverage-coffee-computer-877695.jpg)) no repeat fixed 50%`
    }

    const headingStyle = {
      zIndex: "10",
      marginTop: "70px",
      color: "black",
      fontSize: "32px",
      textTransform: "uppercase"
    };

    const profilePictureStyle = {
      borderRadius: "50%",
      float: "left",
      marginTop: "3%",
      marginRight: "3%",
      marginBottom: "3%",
      width: "30%"
    };

    const summaryStyle = {
      width: "67%",
      float: "right",
    }



    return (

      <div style={allElementsStyle}>
          <header style={headerStyle}>
            <h3>You made it! Welcome to my page!</h3>
            <h1 style={headingStyle}>Viktorija Gjorgjievska</h1>
            <h2>Full Stack Web Developer</h2>
          </header>

          <div style={bodyStyle}>
            <div style={profileStyle}>
              <Image style={profilePictureStyle} src={require('../assets/resume-picture.jpg')} alt="resume-picture"  />

              <p style={summaryStyle}>
              <strong>My story</strong>
              <br/>
              <br/>
                I started Web Development as a journey to expand the limits of my intellectual capabilities and to explore my visual conceptualisation. I want to believe that human potential is limitless as long as there is enough focus put into its development. I see myself as creative and passionate for challenges. I want to be the bridge between art and logic in the world of business.
              </p>
            </div>

            <p style={divStyle}>
              <strong>Projects</strong>
            </p>

            <ul>
              <li><a href="https://github.com/viktorija6420">GitHub Account</a></li>
              <li><a href="https://easybreezymove.herokuapp.com/">Mover App</a></li>
              <li><a href="https://ser-estar.herokuapp.com/index.html">Quiz for Spanish Practice</a></li>
              <li><a href="https://www.languagecognition.ca/">Website for Language Tutoring</a></li>
              <li><a href="http://vip-travel-shop.com.preview.services/#">Travel Agency Static Page with Anchor Links</a></li>
              <li><a href="https://blooming-temple-73019.herokuapp.com/categories">Kaizen-  connecting tutors with locals.</a></li>
            </ul>

            <p style={divStyle}>
              <strong>Technologies</strong>


            <ul>
              <li>Languages</li>
              <li>Libraries</li>
              <li>Frameworks</li>
              <li>Databases</li>
              <li>Design</li>
            </ul>
            </p>

            <p style={divStyle}><strong>Education</strong></p>

             <h3>FULL STACK WEB DEVELOPMENT IMMERSIVE</h3>
             <h4> BITMAKER </h4>
             <p> Toronto, Canada |  2017</p>

             <h3>BACHELOR OF ARTS IN TRANSLATION AND INTERPRETING</h3>
             <h4> Saints Cyril and Methodius University of Skopje</h4>
             <p> Confirmed as <strong>recognised university in Canada</strong> by Comparative Education Service at the University of Toronto School of Continuing Studies</p>
             <p> Skopje, Macedonia |  2009 - 2013</p>


            <p style={divStyle}>
              <strong>Interests</strong>


              <ul>
                <li>Technology</li>
                <li>Learning</li>
                <li>Hiking</li>
                <li>Spoken Languages</li>
              </ul>
            </p>
          </div>
          <p style={divStyle}><strong>My life before coding</strong></p>
            <p>Translation jobs</p>
            <p>Let&apos;s connect: <a href="https://www.linkedin.com/in/viktorija-gjorgjievska/">LinkedIn</a>
            <br/>Email: viktorija.gjorgjievska@gmail.com
          </p>
      </div>
    );
  }
}

export default Home;
