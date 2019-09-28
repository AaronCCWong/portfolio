import React, { useReducer, useEffect } from 'react';

import Api from 'api/api';
import HomeButton from 'components/home-button/HomeButton';
import Spinner from 'components/spinner/Spinner';

import 'components/pos-tagger/PosTagger.scss';

const POS_TAGGER_URL = 'https://hmm-pos-tagger-viterbi.herokuapp.com';

const setButtonClass = (sentenceLength) => {
  const defaultClass = 'pos-tagger--submit-btn';
  if (sentenceLength > 0) {
    return defaultClass;
  }

  return `${defaultClass} disabled`;
};

const initialState = {
  loading: false,
  sentence: '',
  sentenceTags: []
};

const actionType = {
  CHANGE_INPUT: 'CHANGE_INPUT',
  RECEIVE_RESPONSE: 'RECEIVE_RESPONSE',
  SET_LOADING: 'SET_LOADING'
} 

const reducer = (state, action) => {
  switch (action.type) {
    case actionType.CHANGE_INPUT:
      return { 
        ...state,
        sentence: action.payload,
        sentenceTags: []
      };
    case actionType.RECEIVE_RESPONSE:
      return {
        ...state,
        loading: false,
        sentenceTags: action.payload
      };
    case actionType.SET_LOADING:
      return { ...state, loading: true };
    default:
      return state;
  }
};

const PosTagger = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    // Ping heroku service to wake it up
    const url = `${POS_TAGGER_URL}/wakeUp`;
    Api.get(url);
  }, []);

  const handleChange = (e) => {
    dispatch({ type: actionType.CHANGE_INPUT, payload: e.target.value });
  }

  const handleSubmit = () => {
    if (state.sentence.length > 0) {
      dispatch({ type: actionType.SET_LOADING });
      const url = `${POS_TAGGER_URL}/tagSentence`;
      const params = {
        query: { sentence: state.sentence.trim() }
      };

      Api.get(url, params).then((res) => {
        dispatch({ type: actionType.RECEIVE_RESPONSE, payload: res });
      });
    }
  }

  const renderTagResult = () => {
    if (state.loading) {
      return <Spinner className="pos-tagger--spinner" />;
    } else if (state.sentenceTags.length > 0) {
      return (
        <div className="pos-tagger--results">
          {renderTaggedSentence()}
        </div>
      );
    }
  }

  const renderTaggedSentence = () => {
    const tokens = state.sentence.split(' ');
    const tagComponents = tokens.map((token, idx) => (
      <div className="pos-tagger--tagged-token">
        <p className="pos-tagger--token">
          {token}
        </p>

        <i className="fa fa-arrows-v" aria-hidden="true" />

        <p className="pos-tagger--token">
          {state.sentenceTags[idx]}
        </p>
      </div>
    ));

    return tagComponents;
  }

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
          value={state.sentence}
          onChange={handleChange}
        />
      </label>

      <button
        className={setButtonClass(state.sentence.length)}
        onClick={handleSubmit}>
        Tag
      </button>

      {renderTagResult()}
    </div>
  );
}

export default PosTagger;
