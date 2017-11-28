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

const Projects = props => {
  return (
    <Container className='section'>
    <h1>Projects</h1>
      <CardDeck>
        <Card>
          <CardImg top width='100%' src={gift} alt='GiftHub' />
          <CardBody>
            <CardTitle>GiftHub</CardTitle>
            <CardSubtitle>Express, Firebase, Node, D3, Ajax</CardSubtitle>
            <CardText>
              Analyze twitter feeds for gift recomendations based on IBM
              Watson's Personality Insights. Predict personality
              characteristics, needs and values through twitter feeds.
            </CardText>
            <Button href='https://ucla-hackers.github.io/twitter-watson-personality-insights/'>
              View
            </Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg top width='100%' src={aldi} alt='Aldi Logo' />
          <CardBody>
            <CardTitle>ALDI Produce Trivia</CardTitle>
            <CardSubtitle>HTML, CSS, JQuery</CardSubtitle>
            <CardText>
              This is a basic flashcard game to help our ALDI store associates
              learn their produce codes for the registers. There is a hint
              button included to help expedite the learning proess.
            </CardText>
            <Button href='https://dlowkeen.github.io/TriviaGame-Challenge/'>
              View
            </Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg top width='100%' src='https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180' alt='Card image cap' />
          <CardBody>
            <CardTitle>More Projects</CardTitle>
            <CardSubtitle>Donovan Lowkeen</CardSubtitle>
            <CardText>
              Follow the link below to view more projects hosted on my GitHub
              account.
            </CardText>
            <Button href='https://github.com/dlowkeen'>View</Button>
          </CardBody>
        </Card>
      </CardDeck>
    </Container>
    );
};

export default Projects;
