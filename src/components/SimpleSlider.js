import React from 'react';
import { Container } from 'reactstrap';
import Slider from 'react-slick';

class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    }
    return <Container>
        <Slider {...settings} style={styles.sliderStyle}>
          <div>
            <h3>JavaScript</h3>
          </div>
          <div>
            <h3>JQuery</h3>
          </div>
          <div>
            <h3>Node.js</h3>
          </div>
          <div>
            <h3>Express</h3>
          </div>
          <div>
            <h3>React.js</h3>
          </div>
          <div>
            <h3>React-Native</h3>
          </div>
          <div>
            <h3>MySQL</h3>
          </div>
          <div>
            <h3>Firebase</h3>
          </div>
          <div>
            <h3>MongoDB</h3>
          </div>
        </Slider>
      </Container>;
  }
}

const styles={
  sliderStyle: {
    textAlign: 'center',
    justifyContent: 'center'
  }
}

export default SimpleSlider;