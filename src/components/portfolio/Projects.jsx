import React from 'react';
import { Link } from 'react-router-dom';

import 'components/portfolio/Projects.scss';
import ttt from 'images/ttt.png';

const Projects = () => (
  <section className="Portfolio-section">
    <h2 className="Portfolio-section--header">
      Potentially Interesting Projects
    </h2>

    <div className="Projects">
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
