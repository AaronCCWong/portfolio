import './Posts.scss';

const recentPosts = [
  {
    title: 'Building a Bigram Hidden Markov Model for Part-Of-Speech Tagging',
    date: 'May 18, 2019',
    img: '//cdn-images-1.medium.com/max/800/1*JxGuQ-I436JQPLh-UFTcSA.jpeg',
    url: '//blog.aaronccwong.com/2019/building-a-bigram-hidden-markov-model-for-part-of-speech-tagging/'
  },
  {
    title: 'Traffic Sign Classification',
    date: 'Dec 30, 2018',
    img: '//cdn-images-1.medium.com/max/800/1*IN1K7SDIKdOtPjuJcQ9iTw.png',
    url: '//blog.aaronccwong.com/2018/traffic-sign-classification/'
  },
  {
    title: 'I created an AI that beats me at tic-tac-toe',
    date: 'Feb 24, 2018',
    img: '//cdn-images-1.medium.com/max/800/1*HHUIYu43qqo1b1BNCZl0tQ.png',
    url: '//blog.aaronccwong.com/2018/i-created-an-ai-that-beats-me-at-tic-tac-toe/'
  },
  {
    title: 'Notes on elementary graph algorithms. Part 1: Breadth-first search',
    date: 'Nov 27, 2017',
    img: '//cdn-images-1.medium.com/max/645/1*sCHOtq8o_e3-yQDUU3_EYg.png',
    url: '//medium.com/@aaronwong_65108/notes-on-elementary-graph-algorithms-part-1-breadth-first-search-8544404cde59'
  },
  {
    title: 'My Journey Into Deep learning',
    date: 'May 25, 2017',
    img: '//cdn-images-1.medium.com/fit/t/1600/480/1*vbSwweNHPpkMutOQ9fpmhg.jpeg',
    url: '//hackernoon.com/my-journey-into-deep-learning-9104057a642f'
  }
];

const Posts = () => {
  const renderPosts = () => recentPosts.map(post => (
    <a href={post.url} key={post.title} className="Posts-item--link">
      <div className="Posts-item">
        <div
          style={{ backgroundImage: `url(${post.img})`, backgroundColor: '#ffffff' }}
          className="Posts-item--img"
        />
        <h3 className="Posts-item--title">{post.title}</h3>
        <p className="Posts-item--date">{post.date}</p>
      </div>
    </a>
  ));

  return (
    <section className="Portfolio-section">
      <h2 className="Portfolio-section--header">
        Recent blog posts
      </h2>

      <div className="Posts">
        {renderPosts()}
      </div>
    </section>
  );
}

export default Posts;
