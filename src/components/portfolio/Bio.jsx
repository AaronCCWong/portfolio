import React from 'react';

import me from 'images/aaron.jpeg';

const Bio = () => (
  <section className="Portfolio-section">
    <div className="Portfolio-section--about">
      <div className="Portfolio-section--me-container">
        <img className="Portfolio-section--me" src={me} alt="aaron wong" />
      </div>

      <p className="Portfolio-section--bio">
        <b>Bio.</b> I am a software engineer with a master's degree in computer science specializing in intelligent systems. I am particularly
        interested in machine learning and its applications to computer vision and natural language processing.
        In my spare time, I enjoy building web and mobile apps.
      </p>
    </div>
  </section>
);

export default Bio;
