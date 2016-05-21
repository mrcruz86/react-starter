import {List, Map, fromJS} from 'immutable';
import {expect} from 'chai';

import reducer from '../app/reducer';

describe('reducer', () => {

  it('handles SET_STATE', () => {
    const initialState = Map();
    const action = {
      type: 'SET_STATE',
      state: Map({
        name : 'Hello World'
      })
    };
    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS({
      name : 'Hello World'
    }));
  });

  it('handles SET_STATE with plain JS payload', () => {
    const initialState = Map();
    const action = {
      type: 'SET_STATE',
      state: {
        name : 'Hello World'
      }
    };
    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS({
      name : 'Hello World'
    }));
  });

  it('handles SET_STATE without an initial state', () => {
    const action = {
      type: 'SET_STATE',
      state: {
        name : 'Hello World'
      }
    };
    const nextState = reducer(undefined, action);

    expect(nextState).to.equal(fromJS({
      name : 'Hello World'
    }));
  });

});
