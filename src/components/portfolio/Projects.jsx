import React from 'react';
import { Link } from 'react-router-dom';

import 'components/portfolio/Projects.scss';
import exemplifai from 'images/exemplifai.webp';
import ttt from 'images/ttt.webp';

const Projects = () => (
  <section className="Portfolio-section">
    <h2 className="Portfolio-section--header">
      Potentially Interesting Projects
    </h2>

    <div className="Projects">
      <a href="https://www.exemplifai.com">
        <div className="Projects-item">
          <div
            style={{
              backgroundImage: `url(${exemplifai})`
            }}
            className="Posts-item--img"
          />
        <h3 className="Posts-item--title">Exemplifai (WIP)</h3>
        </div>
      </a>

      <Link to="/tic-tac-toe">
        <div className="Projects-item">
          <div
            style={{
              backgroundImage: `url(${ttt})`
            }}
            className="Posts-item--img"
          />
          <h3 className="Posts-item--title">Unbeatable Tic Tac Toe AI</h3>
        </div>
      </Link>
    </div>
  </section>
);

export default Projects;
