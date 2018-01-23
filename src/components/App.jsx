import React, { Component } from 'react';
import Typist from 'react-typist';
import { Link as ScrollLink, Element as ScrollElement } from 'react-scroll';

import DownArrow from 'components/arrow/DownArrow.jsx';
import Posts from 'components/Posts.jsx';

import 'components/App.scss';

class App extends Component {
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
          a software developer.
          <Typist.Backspace count={19} delay={400} />
          New Yorker.
          <Typist.Backspace count={13} delay={400} />
        </Typist>
      );
    }
  }

  render() {
    return (
      <div className="App">
        <header
          className="App-header"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(${process.env.PUBLIC_URL}/skyline-min.jpg)
            `
          }}
        >
          <a href="mailto:aarn.wong@gmail.com">
            <i className="fa fa-envelope-o App-header--icon" />
          </a>
          <a href="//github.com/AaronCCWong">
            <i className="fa fa-github App-header--icon" />
          </a>
          <a href="//www.linkedin.com/in/aaron-wong-92041342/">
            <i className="fa fa-linkedin App-header--icon" />
          </a>
          <a href="//medium.com/@aaronwong_65108">
            <i className="fa fa-medium App-header--icon" />
          </a>
          <a href={`${process.env.PUBLIC_URL}/AaronWong.pdf`}>
            <i className="fa fa-file-pdf-o App-header--icon" />
          </a>
          <h1 className="App-header-title">
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
          <Posts />
        </ScrollElement>
      </div>
    );
  }
}

export default App;
