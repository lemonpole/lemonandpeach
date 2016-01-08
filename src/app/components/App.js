import React from 'react';

class AppCmp extends React.Component {
  render() {
    return (
      <div>
        { this.props.children }
      </div>
    );
  }
}

export default AppCmp;
