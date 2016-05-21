import React from 'react';
import ReactDOM from 'react-dom';
import {renderIntoDocument, scryRenderedDOMComponentsWithTag, Simulate} from 'react-addons-test-utils';
import {expect} from 'chai';
import Sinon from 'sinon';
import {Start} from '../../app/pages/start/Start';

describe('Start Page', () => {

  it('should render blank by default', () => {
    const component = renderIntoDocument(
      <Start></Start>
    );
    const name = scryRenderedDOMComponentsWithTag(component, 'h1');

    expect(name).to.exist;
    expect(name.length).to.equal(1);
    expect(name[0].textContent).to.equal('Welcome to ');
  });

  it('should render the name prop', () => {
    const component = renderIntoDocument(
      <Start name='My App'></Start>
    );
    const name = scryRenderedDOMComponentsWithTag(component, 'h1');

    expect(name).to.exist;
    expect(name.length).to.equal(1);
    expect(name[0].textContent).to.equal('Welcome to My App');
  });

  it('should have an input for text', () => {
    const component = renderIntoDocument(
      <Start></Start>
    );
    const input = scryRenderedDOMComponentsWithTag(component, 'input');

    expect(input).to.exist;
    expect(input.length).to.equal(1);
    input[0].value = 'Hello World';
    expect(input[0].value).to.equal('Hello World');
  });

  it('should call setState on input change', () => {
    var testSetState = Sinon.spy();
    const component = renderIntoDocument(
      <Start setState={testSetState}></Start>
    );
    const input = scryRenderedDOMComponentsWithTag(component, 'input');

    input[0].value = 'Hello World';
    Simulate.change(input[0]);
    Sinon.assert.calledOnce(testSetState);
  });

});
