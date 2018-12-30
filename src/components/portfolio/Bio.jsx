import React from 'react';

import me from 'images/aaron.webp';

const Bio = () => (
  <section className="Portfolio-section">
    <div className="Portfolio-section--about">
      <div className="Portfolio-section--me-container">
        <img className="Portfolio-section--me" src={me} alt="aaron wong" />
      </div>

      <p className="Portfolio-section--bio">
        <b>Bio.</b> I am a software engineer currently working at Merrill Corporation. I am also a student at NYU working
        towards a master's degree in computer science with a focus on intelligent systems. I am particularly
        interested in machine learning and its applications to computer vision and natural language processing.
        I also enjoy applying reinforcement learning algorithms to games.
      </p>
    </div>
  </section>
);

export default Bio;
