import React from 'react';
import { Link } from 'react-router-dom';

import 'components/portfolio/Projects.scss';

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
              backgroundImage: `url(//upload.wikimedia.org/wikipedia/commons/thumb/3/32/Tic_tac_toe.svg/522px-Tic_tac_toe.svg.png)`
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
