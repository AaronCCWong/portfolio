import React, { Component } from 'react';

import Api from 'api/api';
import HomeButton from 'components/home-button/HomeButton';

import 'components/pos-tagger/PosTagger.scss';

class PosTagger extends Component {
  constructor() {
    super();
    this.state = {
      sentence: '',
      sentenceTags: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      sentence: e.target.value,
      sentenceTags: []
    });
  }

  handleSubmit() {
    const url = 'https://hmm-pos-tagger-viterbi.herokuapp.com/tagSentence';
    const params = {
      query: {
        sentence: this.state.sentence
      }
    };

    Api.get(url, params).then(res => this.setState({ sentenceTags: res }));
  }

  renderTagResult() {
    if (this.state.sentenceTags.length > 0) {
      return (
        <div className="pos-tagger--results">
          {this.renderTaggedSentence()}
        </div>
      );
    }
  }

  renderTaggedSentence() {
    const tokens = this.state.sentence.split(' ');
    const tagComponents = tokens.map((token, idx) => (
      <div className="pos-tagger--tagged-token">
        <p className="pos-tagger--token">
          {token}
        </p>

        <i className="fa fa-arrows-v" aria-hidden="true" />

        <p className="pos-tagger--token">
          {this.state.sentenceTags[idx]}
        </p>
      </div>
    ));

    return tagComponents;
  }

  render() {
    return (
      <div className="pos-tagger">
        <HomeButton />

        <h1 className="pos-tagger--title">
          A Bigram Hidden Markov Model Part-Of-Speech Tagger using Viterbi for Decoding
        </h1>

        <p className="pos-tagger--disclaimer">
          The HMM was trained on the WSJ corpus so sentences that are too far out of context from WSJ sentences may result in garbage output.
          The tokenizer splits the string based on space so punctuation may not be tagged properly either.
        </p>

        <label>
          <p>
            Enter the sentence you want to tag:
          </p>

          <textarea
            className="pos-tagger--textbox"
            value={this.state.sentence}
            onChange={this.handleChange}
          />
        </label>

        <button
          className="pos-tagger--submit-btn"
          onClick={this.handleSubmit}>
          Tag
        </button>

        {this.renderTagResult()}
      </div>
    );
  }
}

export default PosTagger;
