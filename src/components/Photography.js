import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Gallery from 'react-photo-gallery';

class Photography extends React.Component {
    render() {
        return (
            <Container className='section' id='photography'>
                <Gallery photos={PHOTO_SET} />
            </Container>
        );
    }
}
const PHOTO_SET = [
  {
    src: 'http://example.com/example/img1.jpg',
    width: 4,
    height: 3
  },
  {
    src: 'http://example.com/example/img2.jpg',
    width: 1,
    height: 1
  }
];

export default Photography;