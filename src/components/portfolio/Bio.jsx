import React from 'react';

import me from 'images/aaron.jpeg';

const Bio = () => (
  <section className="Portfolio-section">
    <div className="Portfolio-section--about">
      <div className="Portfolio-section--me-container">
        <img className="Portfolio-section--me" src={me} alt="aaron wong" />
      </div>

      <p className="Portfolio-section--bio">
        <b>Bio.</b> I am a software engineer currently working at Merrill Corporation.
        I am also working towards my master's degree in computer science at NYU. I am
        particularly interested in machine learning and its applications to computer vision
        and natural language processing.
      </p>
    </div>
  </section>
);

export default Bio;
