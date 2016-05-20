import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import * as actionCreators from './start_actions';

import LogoHeaderMedium from '../../components/logo_header_medium/LogoHeaderMedium';

require('./start.scss');

export const Start = React.createClass({
  mixins: [PureRenderMixin],
  setAppName: function(event) {
    let state = {
      name: event.target.value
    };
    this.props.setState(state);
  },
  render: function() {
    return (
      <div id='start'>
        <LogoHeaderMedium></LogoHeaderMedium>
        <h1>Welcome to {this.props.name}</h1>
        <input type='text' onChange={this.setAppName}/>
      </div>
    )
  }

});

function mapStateToProps(state) {
  return {
    name: state.get('name')
  };
}

export const StartContainer = connect(mapStateToProps, actionCreators)(Start);
