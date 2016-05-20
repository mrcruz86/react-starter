import React from 'react';

require('./app.scss');

export default React.createClass({

  render: function() {
    return this.props.children;
  }

});
