import { useReducer, useEffect } from 'react';

import Api from '../../api/api';
import HomeButton from '../home-button/HomeButton';
import { Spinner } from '../spinner/Spinner';

import './PosTagger.scss';

const POS_TAGGER_URL = 'https://hmm-pos-tagger-viterbi.herokuapp.com';

const setButtonClass = (sentenceLength: number) => {
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

enum ActionType {
  CHANGE_INPUT = 'CHANGE_INPUT',
  RECEIVE_RESPONSE = 'RECEIVE_RESPONSE',
  SET_LOADING = 'SET_LOADING'
} 

const reducer = (state = initialState, action: { type: ActionType, payload?: any }) => {
  switch (action.type) {
    case ActionType.CHANGE_INPUT:
      return { 
        ...state,
        sentence: action.payload,
        sentenceTags: []
      };
    case ActionType.RECEIVE_RESPONSE:
      return {
        ...state,
        loading: false,
        sentenceTags: action.payload
      };
    case ActionType.SET_LOADING:
      return { ...state, loading: true };
    default:
      return state;
  }
};

export const PosTagger = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    // Ping heroku service to wake it up
    const url = `${POS_TAGGER_URL}/wakeUp`;
    Api.get(url);
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch({ type: ActionType.CHANGE_INPUT, payload: event.target.value });
  }

  const handleSubmit = () => {
    if (state.sentence.length > 0) {
      dispatch({ type: ActionType.SET_LOADING });
      const url = `${POS_TAGGER_URL}/tagSentence`;
      const params = {
        query: { sentence: state.sentence.trim() }
      };

      Api.get(url, params).then((res) => {
        dispatch({ type: ActionType.RECEIVE_RESPONSE, payload: res });
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
    const tokens = state.sentence.trim().split(' ');
    const tagComponents = tokens.map((token: string, idx: number) => (
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
