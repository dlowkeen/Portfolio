import React, { Component } from 'react';
import { Container, Media } from 'reactstrap';
import donovan from '../assets/images/dlow.jpeg';

class AboutMe extends Component {
    render() {
        return (
        <Container className='section'>
            <Media>
              <Media left href="#">
                <img src={donovan} alt="donovan" />
              </Media>
              <Container>
                <Media body>
                  <Media heading>Donovan Lowkeen</Media>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                </Media>
              </Container>
            </Media>
          </Container>
        );
    }
}

export default AboutMe;
