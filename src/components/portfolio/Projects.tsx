import { Link } from 'react-router-dom';

import taggedSentence from '../../images/taggedsentence.jpg';
import ttt from '../../images/ttt.jpg';
import './Projects.scss';

const Projects = () => (
  <section className="Portfolio-section">
    <h2 className="Portfolio-section--header">
      Potentially Interesting Projects
    </h2>

    <div className="Projects">
      <Link to="/pos-tagger" className="Projects-item--link">
        <div className="Projects-item">
          <div
            style={{
              backgroundImage: `url(${taggedSentence})`
            }}
            className="Posts-item--img"
          />
          <h3 className="Posts-item--title">A Bigram HMM Part-Of-Speech Tagger using Viterbi for Decoding</h3>
        </div>
      </Link>

      <Link to="/tic-tac-toe" className="Projects-item--link">
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
