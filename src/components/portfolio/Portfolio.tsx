import { useState } from 'react';
import Typist from 'react-typist';
import { Link as ScrollLink, Element as ScrollElement } from 'react-scroll';

import Bio from './Bio';
import DownArrow from './arrow/DownArrow';
import Posts from './Posts';
import Projects from './Projects';

import './Portfolio.scss';

export const Portfolio: React.FunctionComponent = () => {
  const [typing, setTyping] = useState(false);

  const onDone = () => {
    setTyping(false);
    // restart
    setTyping(true);
  }

  const startInfo = () => {
    setTyping(true);
  }

  const renderTypist = () => {
    if (typing) {
      return (
        <Typist onTypingDone={onDone}>
          Aaron.
          <Typist.Backspace count={6} delay={400} />
          <Typist.Delay ms={200} />
          a software engineer.
          <Typist.Backspace count={20} delay={400} />
        </Typist>
      );
    }
  }

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
        <a href="//twitter.com/aar_wong">
          <i className="fa fa-twitter Portfolio-header--icon" aria-hidden="true" />
        </a>
        <a href="//medium.com/@aaronwong_65108">
          <i className="fa fa-medium Portfolio-header--icon" aria-hidden="true" />
        </a>
        <a href="//blog.aaronccwong.com">
          <i className="fa fa-rss-square Portfolio-header--icon" aria-hidden="true" />
        </a>
        <a
          href="//drive.google.com/file/d/14Hxl_PuHHR2mjN_JKDrFJpp7B32ysdLl/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer">
          <i className="fa fa-file-pdf-o Portfolio-header--icon" aria-hidden="true" />
        </a>
        <h1 className="Portfolio-header-title">
          <Typist
            onTypingDone={startInfo}
            cursor={{
              show: false,
              hideWhenDone: true,
              hideWhenDoneDelay: 0,
            }}
          >
            Hi. I am&nbsp;
          </Typist>

          {renderTypist()}
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
