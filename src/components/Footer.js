import React from "react";
import { Button, ButtonGroup, Container } from "reactstrap";
import linkedin from '../assets/images/linkedin.png';
import github from '../assets/images/github.png';
import facebook from '../assets/images/facebook.png';
import instagram from '../assets/images/instagram.png';

class Footer extends React.Component {
  render() {
    return <Container id="footer-container" style={styles.footerStyle}>
        <a href="https://www.linkedin.com/in/donovanlowkeen/">
          <img className="logos" src={linkedin} />
        </a>
        <a href="www.github.com/dlowkeen">
          <img className="logos" src={github} />
        </a>
        <a href="www.facebook.com/donovan.lowkeen">
          <img className="logos" src={facebook} />
        </a>
        <a href="www.instagram.com/highkeylowkeen">
          <img className="logos" src={instagram} />
        </a>
      </Container>;
  }
}

const styles = {
  footerStyle: {
    width: '35%',
    display: 'flex',
    justifyContent: 'space-evenly',
    paddingTop: 20,
    paddingBottom: 30
  },
  imageStyle: {
    padding: 3
  }
}



export default Footer;