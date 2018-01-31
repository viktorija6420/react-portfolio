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
        <Image src={require('../assets/rsz_smartviki.jpg')} alt="whatever"/>

        <p>
         <strong>My story</strong>
        </p>

        <p>
        I love coding even though it fucking sucks all the time.
        </p>

        <p>
         <strong>Things I have made</strong>
        </p>

        <p>
         Links of websites and stuff i have made
        </p>

        <p>
        <strong>What I am currently working on</strong>
        </p>

        <p>Link from a gitHub repo</p>

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
         <p>General Assembly Bitmaker</p>
         <p>Full-Stack Web Development</p>
         <p>August-November 2017</p>

        <p><strong>Self-thought in:</strong></p>
        <ul>
          <li>ES6</li>
          <li>JSX</li>
          <li>React</li>
        </ul>


        <p><strong>Things I do when I am not coding</strong></p>

        <ul>
          <li>Long walks in nature</li>
          <li>Pilates</li>
          <li>Watching a lot of TV shows to catch up with the world</li>
          <li>Learning some new spoken language</li>
          <li>Talking to my friends from around the Globe</li>
          <li>Watching UFC fights</li>
          <li>Reading on some new theory about the meaning of life</li>
          <li>Planning my next trip to somewhere</li>
        </ul>

        <p><strong>My life before coding</strong></p>
        <p>Bachelor of Arts in Translation and Interpreting</p>
        <p>Translation jobs</p>
    </div>
    );
  }
}

export default Home;
