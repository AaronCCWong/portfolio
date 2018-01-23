import React, { Component } from 'react';
import Typist from 'react-typist';

import DownArrow from 'components/arrow/DownArrow.jsx';

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
          <Typist.Backspace count={21} delay={400} />
          a New Yorker.
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

          <DownArrow />
        </header>

        <section>
          <h2 className="App-section-header">
            Recent blog posts
          </h2>
        </section>
      </div>
    );
  }
}

export default App;
