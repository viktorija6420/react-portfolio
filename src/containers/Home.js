import React, {Component} from 'react';
import styled from 'styled-components';
import Container from '../themes/grid/Container';

const Image = styled.img`

`;



class Home extends Component {
  static propTypes = {};
  render() {
    return (

      <div>
        <Container/>
        <h1>Viktorija Gjorgjievska</h1>
        <Image src={require('../assets/resume-picture.jpg')} alt="resume-picture"/>

        <p>
         <strong>My story</strong>
        </p>

        <p>
        I started Web Development as a journey to expand the limits of my intellectual capabilities and explore my visual conceptualisation. I want to believe that human potential is limitless as long as there is enough focus put into its development. I see myself as creative and passionate for challenges. I want to be the bridge between art and logic in the world of business.
        </p>

        <p>
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

        <p>
          <strong>Technologies</strong>
         </p>



        <ul>
          <li>Languages</li>
          <li>Libraries</li>
          <li>Frameworks</li>
          <li>Databases</li>
          <li>Design</li>
        </ul>

        <p><strong>Education</strong></p>
         <p>Bachelor of Arts in Translation and Interpreting</p>
         <h3> SAINTS CYRIL AND METHODIUS UNIVERSITY OF SKOPJE</h3>
         <p> Confirmed as <strong>recognised university in Canada</strong> by Comparative Education Service at the University of Toronto School of Continuing Studies</p>
         <p> Skopje, Macedonia |  2009 - 2013</p>
         <p>August-November 2017</p>


        <p><strong>Interests</strong></p>

        <ul>
          <li>Technology</li>
          <li>Learning</li>
          <li>Hiking</li>
          <li>Spoken Languages</li>
        </ul>

        <p><strong>My life before coding</strong></p>
        <p>Translation jobs</p>
    </div>
    );
  }
}

export default Home;
