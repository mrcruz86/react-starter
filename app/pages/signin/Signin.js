import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';

export const Signin = React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return (
      <div>
        <h1>Signin to {this.props.name}</h1>
      </div>
    )
  }

});

function mapStateToProps(state) {
  return {
    name: state.get('name')
  };
}

export const SigninContainer = connect(mapStateToProps)(Signin);
