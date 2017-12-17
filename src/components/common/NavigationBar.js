import React, { Component } from "react";
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

var smoothScroll = {
  timer: null,

  stop: function() {
    clearTimeout(this.timer);
  },

  scrollTo: function(id, callback) {
    var settings = {
      duration: 1000,
      easing: {
        outQuint: function(x, t, b, c, d) {
          return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
        }
      }
    };
    var percentage;
    var startTime;
    var node = document.getElementById(id);
    var nodeTop = node.offsetTop;
    var nodeHeight = node.offsetHeight;
    var body = document.body;
    var html = document.documentElement;
    var height = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
    var windowHeight = window.innerHeight;
    var offset = window.pageYOffset;
    var delta = nodeTop - offset;
    var bottomScrollableY = height - windowHeight;
    var targetY =
      bottomScrollableY < delta
        ? bottomScrollableY - (height - nodeTop - nodeHeight + offset)
        : delta;

    startTime = Date.now();
    percentage = 0;

    if (this.timer) {
      clearInterval(this.timer);
    }

    function step() {
      var yScroll;
      var elapsed = Date.now() - startTime;

      if (elapsed > settings.duration) {
        clearTimeout(this.timer);
      }

      percentage = elapsed / settings.duration;

      if (percentage > 1) {
        clearTimeout(this.timer);

        if (callback) {
          callback();
        }
      } else {
        yScroll = settings.easing.outQuint(
          0,
          elapsed,
          offset,
          targetY,
          settings.duration
        );
        window.scrollTo(0, yScroll);
        this.timer = setTimeout(step, 10);
      }
    }

    this.timer = setTimeout(step, 10);
  }
};

class NavigationBar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  handleHomeClick() {
    smoothScroll.scrollTo("landing");
  };

  handleContactClick() {
    smoothScroll.scrollTo("contact");
  };

  handleAboutMeClick() {
    smoothScroll.scrollTo("aboutMe");
  };

  handleSkillsClick() {
    smoothScroll.scrollTo("skills");
  };

  handleProjectsClick() {
    smoothScroll.scrollTo("projects");
  };

  render() {
    return <div className="smooth-scroll">
        <Container>
          <Navbar className="fixed-top" toggleable id="navigation">
            <NavbarToggler right onClick={this.toggle} />
            <NavbarBrand href="/" className="page-title" onClick={this.handleHomeClick}>
              Home
            </NavbarBrand>
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink className="page-title" href="#about" onClick={this.handleAboutMeClick}>
                    About
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="page-title" href="#skills">
                    Skills
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="page-title" href="#projects" onClick={this.handleProjectsClick}>
                    Projects
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="page-title" href="#contact" onClick={this.handleContactClick}>
                    Contact
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </Container>
      </div>;
  }
}

export default NavigationBar;
