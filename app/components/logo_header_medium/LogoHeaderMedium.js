import React from 'react';

require('./logo_header_medium.scss');

export default React.createClass({

  render: function() {
    return (
      <div id='logo-header-medium'>
        <img alt='Logo goes here' src='./assets/starter-logo.png' />
      </div>
    )
  }

});
