import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import {Link} from 'react-router';
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
        <Link class='btn' to='/signin'>Sign In</Link>
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
