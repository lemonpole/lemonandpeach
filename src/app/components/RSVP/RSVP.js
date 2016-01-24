import React from 'react';
import NavCmp from '../Common/Nav';

class RSVPCmp extends React.Component {
  render() {
    return (
        <div id="rsvp">
          <NavCmp />
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <img src="http://placehold.it/350x300" />
              </div>

              <form className="col-md-6">
                <h2>Tell us if you're coming!</h2>

                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Full name" />
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <button className="btn btn-success btn-lg btn-block">
                      The fuck yea!
                    </button>
                  </div>
                  <div className="col-md-6">
                    <button className="btn btn-danger btn-lg btn-block">
                      No, I am a dookiehead!
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
    );
  }
}

export default RSVPCmp;
