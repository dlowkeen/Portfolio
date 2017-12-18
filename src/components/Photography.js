import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Gallery from 'react-photo-gallery';
import img1 from '../assets/images/img1.jpg'
import img2 from "../assets/images/img2.jpg";

class Photography extends React.Component {
    render() {
        return (
            <Container className='section' id='photography'>
                <h1>Photography</h1>
                <Gallery photos={PHOTO_SET} />
            </Container>
        );
    }
}
const PHOTO_SET = [
  {
    src: img1,
    width: 4,
    height: 3
  },
  {
    src: img2,
    width: 1,
    height: 1
  }
];

export default Photography;