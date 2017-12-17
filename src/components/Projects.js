import React from 'react';
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  CardSubtitle,
  CardBody,
  Container
} from 'reactstrap';
import gift from '../assets/images/Gifts.jpg';
import aldi from '../assets/images/aldi.png';
import pirateShip from '../assets/images/pirate_ship.gif';

const Projects = props => {
  return <Container className="section" id="projects">
      <h1>Projects</h1>
      <CardDeck>
        <Card>
          <CardImg top width="100%" src={gift} alt="GiftHub" />
          <CardBody>
            <CardTitle>GiftHub</CardTitle>
            <CardSubtitle>Express, Firebase, Node, D3, Ajax</CardSubtitle>
            <CardText>
              Analyze twitter feeds for gift recomendations based on IBM
              Watson's Personality Insights. Predict personality
              characteristics, needs and values through twitter feeds.
            </CardText>
            <Button href="https://ucla-hackers.github.io/twitter-watson-personality-insights/">
              View
            </Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg top width="100%" src={aldi} alt="Aldi Logo" />
          <CardBody>
            <CardTitle>ALDI Produce Trivia</CardTitle>
            <CardSubtitle>HTML, CSS, JQuery</CardSubtitle>
            <CardText>
              This is a basic flashcard game to help our ALDI store associates
              learn their produce codes for the registers. There is a hint
              button included to help expedite the learning proess.
            </CardText>
            <Button href="https://dlowkeen.github.io/TriviaGame-Challenge/">
              View
            </Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg top width="100%" src={pirateShip} alt="ARgo Logo" />
          <CardBody>
            <CardTitle>ARgo</CardTitle>
            <CardSubtitle>React-Native, Firebase, ViroMedia AR</CardSubtitle>
            <CardText>
              ARgo is a mobile application that uses location intelligence and
              augmented reality to immerse users in a new experience. Users
              have the ability to enter into new worlds through AR portals and
              collect badges with their friends.
            </CardText>
            <Button href="https://github.com/ARKrew/workingArgo">View</Button>
          </CardBody>
        </Card>
      </CardDeck>
      <Button style={styles.bigButtonStyle} href="https://github.com/dlowkeen">
        View More Projects
      </Button>
    </Container>;
};

const styles = {
  bigButtonStyle: {
    width: '100%',
    height: 80,
    marginTop: 20,
    fontSize: 36
  }
};

export default Projects;
