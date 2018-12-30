import React from 'react';

import 'components/portfolio/Posts.scss';

const recentPosts = [
  {
    title: 'I created an AI that beats me at tic-tac-toe',
    date: 'Feb 24, 2018',
    img: '//cdn-images-1.medium.com/max/800/1*HHUIYu43qqo1b1BNCZl0tQ.png',
    url: '//medium.com/@aaronwong_65108/i-created-an-ai-that-beats-me-at-tic-tac-toe-3ea6ba22cd71'
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
    <a href={post.url} key={post.title}>
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
