import React, { Component } from 'react';
import Typist from 'react-typist';
import { Link as ScrollLink, Element as ScrollElement } from 'react-scroll';

import Bio from 'components/portfolio/Bio.jsx';
import DownArrow from 'components/portfolio/arrow/DownArrow.jsx';
import Posts from 'components/portfolio/Posts.jsx';
import Projects from 'components/portfolio/Projects.jsx';

import 'components/portfolio/Portfolio.scss';

class Portfolio extends Component {
  constructor() {
    super();
    this.state = {
      typing: false,
    };
    this.onDone = this.onDone.bind(this);
    this.startInfo = this.startInfo.bind(this);
  }

  onDone() {
    this.setState({ typing: false }, () => {
      this.setState({ typing: true });
    });
  }

  startInfo() {
    this.setState({ typing: true });
  }

  renderTypist() {
    if (this.state.typing) {
      return (
        <Typist onTypingDone={this.onDone}>
          Aaron.
          <Typist.Backspace count={6} delay={400} />
          <Typist.Delay ms={200} />
          a software engineer.
          <Typist.Backspace count={20} delay={400} />
        </Typist>
      );
    }
  }

  render() {
    return (
      <div className="Portfolio">
        <header
          className="Portfolio-header"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(${process.env.PUBLIC_URL}/skyline.jpg)
            `
          }}
        >
          <a href="mailto:aarn.wong@gmail.com">
            <i className="fa fa-envelope-o Portfolio-header--icon" aria-hidden="true" />
          </a>
          <a href="//github.com/AaronCCWong">
            <i className="fa fa-github Portfolio-header--icon" aria-hidden="true" />
          </a>
          <a href="//www.linkedin.com/in/aaron-wong-92041342/">
            <i className="fa fa-linkedin Portfolio-header--icon" aria-hidden="true" />
          </a>
          <a href="//medium.com/@aaronwong_65108">
            <i className="fa fa-medium Portfolio-header--icon" aria-hidden="true" />
          </a>
          <a href="//blog.aaronccwong.com">
            <i className="fa fa-rss-square Portfolio-header--icon" aria-hidden="true" />
          </a>
          <a
            href="//drive.google.com/file/d/1drADLhTwL_rAPHDsBDAcvM_zoey6Uth_/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer">
            <i className="fa fa-file-pdf-o Portfolio-header--icon" aria-hidden="true" />
          </a>
          <h1 className="Portfolio-header-title">
            <Typist
              onTypingDone={this.startInfo}
              cursor={{
                show: false,
                hideWhenDone: true,
                hideWhenDoneDelay: 0,
              }}
            >
              Hi. I am&nbsp;
            </Typist>
            {this.renderTypist()}
          </h1>

          <ScrollLink smooth={true} to="blogPosts">
            <DownArrow />
          </ScrollLink>
        </header>

        <ScrollElement name="blogPosts">
          <Bio />
        </ScrollElement>

        <Posts />

        <Projects />
      </div>
    );
  }
}

export default Portfolio;
