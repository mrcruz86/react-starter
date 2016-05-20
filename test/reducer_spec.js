import {List, Map, fromJS} from 'immutable';
import {expect} from 'chai';

import reducer from '../client/js/reducer';

describe('reducer', () => {

  it('handles SET_STATE', () => {
    const initialState = Map();
    const action = {
      type: 'SET_STATE',
      state: Map({
        name : 'Jason'
      })
    };
    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS({
      name : 'Jason'
    }));
  });

  it('handles SET_STATE with plain JS payload', () => {
    const initialState = Map();
    const action = {
      type: 'SET_STATE',
      state: {
        name : 'Jason'
      }
    };
    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS({
      name : 'Jason'
    }));
  });

  it('handles SET_STATE without an initial state', () => {
    const action = {
      type: 'SET_STATE',
      state: {
        name : 'Jason'
      }
    };
    const nextState = reducer(undefined, action);

    expect(nextState).to.equal(fromJS({
      name : 'Jason'
    }));
  });

});
