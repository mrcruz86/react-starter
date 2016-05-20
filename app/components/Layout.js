import React from 'react';

import Header from './Header';

export default React.createClass({
  getName: function() {
    return this.props.names[0] || 'Hello World';
  },
  render: function() {
    return (
      <div>
        <Header name={this.getName()} />
      </div>
    )
  }
});

// export default class Layout extends React.Component {
//
//   constructor() {
//     super();
//     this.state = {
//       name: '[App Name]'
//     };
//   }
//
//   changeName(name) {
//     this.setState({name});
//   }
//
//   render() {
//     return (
//       <div>
//         <Header changeName={this.changeName.bind(this)} name={this.state.name} />
//       </div>
//     );
//   }
// };
