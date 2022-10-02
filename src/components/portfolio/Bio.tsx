import me from '../../images/aaron.jpeg';

const Bio = () => (
  <section className="Portfolio-section">
    <div className="Portfolio-section--about">
      <div className="Portfolio-section--me-container">
        <img className="Portfolio-section--me" src={me} alt="aaron wong" />
      </div>

      <p className="Portfolio-section--bio">
        <span className="Portfolio-section--bio-title">Bio.</span> I am a software development engineer at Amazon.
        I love learning about machine learning and its applications to computer vision and natural language processing.
        In my spare time, I enjoy building web and mobile apps.
      </p>
    </div>
  </section>
);

export default Bio;
