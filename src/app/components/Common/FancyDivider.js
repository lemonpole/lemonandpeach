import React from 'react';

let className = '';

export default class FancyDividerCmp extends React.Component {
  constructor( props ) {
    super( props );

    if( this.props.className ) {
      className = ' ' + this.props.className;
    }
  }

  render() {
    return (
      <div className={ 'fancy-divider' + className }>
        <hr />
        <i className="fa fa-heart fa-lg fa-fw"></i>
        <hr />
      </div>
    );
  }
}
