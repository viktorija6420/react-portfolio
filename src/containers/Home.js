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
      boxSizing: "border-box",

    }

    const bodyStyle = {

    }

    const profileStyle = {
      backgroundColor:" #FFDE80",
      overflow: "hidden",
      zIndex: "300",
      padding: "10px"
    }

    const divStyle = {
      backgroundColor: "#FFDE80",
      margin: "0",
      padding: "10px"
    }

    const pictureStyle = {
      position: "fixed",
      zIndex: "-300",
      marginRight: "200px",
      paddingLeft: "0px",
      width: "100%",
      height: "100%",
      top: "0%",
      left: "0%"
    }

    const headerStyle = {
      textAlign: "center"
    }

    const headerTextStyle = {
      zIndex: "200",
      color: "white",
      fontSize: "32px"
    };

    const profilePictureStyle = {
      borderRadius: "50%",
      float: "left",
      marginTop: "3%",
      marginRight: "3%",
      marginBottom: "3%",
      width: "30%",
      maxWidth: "200px",
      maxHeight: "250px"
    };

    const summaryStyle = {
      width: "67%",
      float: "right"
    }

    const grayAreas = {
      backgroundColor: "lightgray",
      marginTop: "-20px",
      padding: "10px"
    }


    const listStyle = {
      listStyleType: "none",
      marginLeft: "-30px"

    }

    const lastDivStyle = {
      padding:"10px"
    };

    const footerStyle = {
      textAlign: "center",
      backgroundColor: "#FFDE80"
    }

    return (

      <div style={allElementsStyle}>
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

          <div style={bodyStyle}>
          <Image style={pictureStyle} src={require('../assets/business.jpg')} alt="table with computer"  />

            <div style={profileStyle}>
              <Image style={profilePictureStyle} src={require('../assets/resume-picture.jpg')} alt="resume-picture"  />

              <p style={summaryStyle}>
              <strong>My story</strong>
              <br/>
              <br/>
                I started Web Development as a journey to expand the limits of my intellectual capabilities and to explore my visual conceptualisation. I want to believe that human potential is limitless as long as there is enough focus put into its development. I see myself as creative and passionate for challenges. I want to be the bridge between art and logic in the world of business.
              </p>

            </div>

            <div className = "paragraph" style={grayAreas}>
              <strong>Skills</strong>

              <ul style={listStyle}>
                <li><strong>Technologies:</strong> HTML,
                CSS, Ruby(OOP), Rails,
                JavaScript, ES6, React,
                PostgreSQL, SQLite,
                Bootstrap, APIs, AJAX,
                jQUERY, Git, GitHub,
                XML, Git, GitHub, Bash,
                Heroku, Trello,
                Dreamweaver</li>
                <br/>
                <li><strong>Spoken Languages:</strong>English, Italian, Spanish,
                Portuguese, Macedonian</li>
              </ul>
            </div>
            <div className = "paragraph"style={divStyle}>
              <strong>Projects</strong>

            <ul style={listStyle}>
              <li><a href="https://easybreezymove.herokuapp.com/">Mover App</a></li>
              <li><a href="https://ser-estar.herokuapp.com/index.html">Quiz for Spanish Practice</a></li>
              <li><a href="https://www.languagecognition.ca/">Website for Language Tutoring</a></li>
              <li><a href="http://vip-travel-shop.com.preview.services/#">Travel Agency Static Page with Anchor Links</a></li>
              <li><a href="https://blooming-temple-73019.herokuapp.com/categories">Kaizen-  connecting tutors with locals.</a></li>
              <li>See more on <a href="https://github.com/viktorija6420">GitHub</a>!</li>
            </ul>
            </div>



            <div className = "paragraph" style={grayAreas}><strong>Work Experience</strong>
            <br/>
            <br/>
             <strong>FREELANCE WEB DEVELOPER</strong>
             <p> Toronto, Canada |  January 2018 - present</p>

               <ul>
                 <li>Developed several applications in a pair, a team of three and five programmers using Ruby on Rails and JavaScript.</li>
                 <li>Teamwork on GitHub. (branching, merging, pulling, pushing, stashing...)</li>
                 <li>Data modelling for a clear idea of the project and table relationships.</li>
                 <li>Creating MVP and strategy for quality assurance.</li>
                 <li>Making reusable code with MVC architectural pattern.</li>
                 <li>Problem-solve individually, in a team or by pair programming while coding and debugging.(DOM, byebug, pry)</li>
                 <li>Manipulating the database.(PSQL, SQL)</li>
                 <li>Adding APIs (Google Maps API, Pokeapi the RESTful Pokemon API)</li>
                 <li>Finding good front-end solutions (HTML5, CSS3, Bootstrap, JavaScript, AJAX calls, jQuery).</li>
                 <li>Deployment on Heroku.</li>
               </ul>

             <strong>MENTOR</strong>
             <strong> Canada Learning Code</strong>
             <p>Toronto, Canada |  April 2018 - present</p>

             <ul>
              <li>Mentored Girls Learning Code to build a website using HTML and CSS.</li>
              <li>Mentored Teens Learning Code to build a resume using HTML and CSS.</li>
              <li>Mentored Ladies Learning Code to build a Chrome extension. (JavaScript for beginners)</li>
             </ul>

            </div>

            <p style={divStyle}><strong>Education</strong>
             <br/>
             <br/>
             <strong>BACHELOR OF ARTS IN TRANSLATION AND INTERPRETING</strong>
             <br/>
             <strong> Saints Cyril and Methodius University of Skopje</strong>
             <br/>
             <br/>
             <span> Skopje, Macedonia |  2009 - 2013</span>
             <br/>
             <br/>
             <span> Confirmed as <strong>recognised university in Canada</strong> by Comparative Education Service at the University of Toronto School of Continuing Studies</span>
             </p>

            <div style={lastDivStyle}>
              <strong>Interests</strong>
              <ul>
                <li>Technology</li>
                <li>Learning</li>
                <li>Hiking</li>
                <li>Spoken Languages</li>
              </ul>
            </div>

          </div>

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

export default Home;
