import React from "react";
import { Button, ButtonGroup, Container } from "reactstrap";
import linkedin from '../assets/images/linkedin.png';
import github from '../assets/images/github.png';
import facebook from '../assets/images/facebook.png';
import instagram from '../assets/images/instagram.png';

class Footer extends React.Component {
  render() {
    return <Container id='footer-container'>
        <ButtonGroup>
          <Button id="footer-buttons" href="www.google.com">
            <img className="logos" src={linkedin} />
          </Button>
          <Button id="footer-buttons" href="www.github.com/dlowkeen">
            <img className="logos" src={github} />
          </Button>
          <Button id="footer-buttons" href="www.facebook.com">
            <img className="logos" src={facebook} />
          </Button>
          <Button id="footer-buttons" href="www.instagram.com">
            <img className="logos" src={instagram} />
          </Button>
        </ButtonGroup>
      </Container>;
  }
}

export default Footer;