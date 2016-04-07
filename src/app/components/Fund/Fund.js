import React from 'react';
import NavCmp from '../Common/Nav';

export default class FundCmp extends React.Component {
  constructor( props ) {
    super( props ); 
  }

  render() {
    return (
      <div id="fund">
        <NavCmp location={ this.props.location } />

        <div className="fund-container">
          <div className="inner">
            <h1>
              Donate, cuz we broke af
              <small>(For our honeymoon in Japan!)</small>
            </h1>

            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
              <input type="hidden" name="cmd" value="_s-xclick" />
              <input type="hidden" name="hosted_button_id" value="KVB48NQFC72VS" />
              <button type="submit" name="submit" className="btn btn-primary">Donate</button>
              <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
