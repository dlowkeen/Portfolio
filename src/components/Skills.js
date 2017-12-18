import React, { Component } from 'react';
import { Container } from 'reactstrap';
import SimpleSlider from './SimpleSlider';

class Skills extends Component {
    render() {
        return (
            <Container className='section' id="skills">
                <h1>Skills</h1>
                <p>JavaScript, JQeury, Node.js, Express, React.js
                    React-Native, Firebase, MySQL, MongoDB, Git</p>
                <SimpleSlider />
            </Container>
        );
    };
};

export default Skills;