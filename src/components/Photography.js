import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Gallery from 'react-photo-gallery';
import PhotoGrid from "react-photo-feed";
import "react-photo-feed/library/style.css";
import img1 from '../assets/images/img1.jpg'
import img3 from "../assets/images/img3.jpg";
import img4 from '../assets/images/img4.jpg';
import img5 from '../assets/images/img5.jpg';
import img6 from '../assets/images/img6.jpg';
import img7 from '../assets/images/img7.jpg';
import img8 from '../assets/images/img8.jpg';
import img9 from '../assets/images/img9.jpg';
import img10 from '../assets/images/img10.jpg';

const demoPhotos = [
  {
    id: 1,
    src: img4,
    bigSrc: img4
  },
  {
    id: 2,
    src: img5,
    bigSrc: img5
  },
  {
    id: 3,
    src: img1,
    bigSrc: img1
  },
  {
    id: 4,
    src: img3,
    bigSrc: img3
  },
  {
    id: 5,
    src: img6, 
    bigSrc: img6
  },
  {
    id: 6,
    src: img7,
    bigSrc: img7
  },
  {
    id: 7,
    src: img8,
    bigSrc: img8
  },
  {
    id: 8, 
    src: img9, 
    bigSrc: img9
  },
  {
    id: 9,
    src: img10,
    bigSrc: img10
  }
];

class Photography extends React.Component {
    render() {
        return (
            <Container className='section' id='photography'>
                <h1>Photography</h1>
                <PhotoGrid columns={3} photos={demoPhotos} />
            </Container>
        );
    }
}

export default Photography;