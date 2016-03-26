import React from 'react';

class AppCmp extends React.Component {
  render() {
    return (
      <div className="full-height">
        { this.props.children }
      </div>
    );
  }
}

export default AppCmp;
