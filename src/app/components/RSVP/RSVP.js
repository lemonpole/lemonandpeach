import React from 'react';
import { Link } from 'react-router';
import NavCmp from '../Common/Nav';

class RSVPCmp extends React.Component {
  constructor() {
    super();
    this.state = {
      isGoing: false
    };
  }

  onClickGoing( event ) {
    event.preventDefault();
    this.setState({ isGoing: 'going' });
  }

  onClickNotGoing( event ) {
    event.preventDefault();
    this.setState({ isGoing: 'not going' });
  }

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
                    <button className="btn btn-going btn-lg btn-block" onClick={ this.onClickGoing.bind( this ) }>
                      The fuck yea!
                    </button>
                  </div>
                  <div className="col-md-6">
                    <button className="btn btn-not-going btn-lg btn-block" onClick={ this.onClickNotGoing.bind( this ) }>
                      No, I am a dookiehead!
                    </button>
                  </div>
                </div>

                <div id="going" className={ 'form-group ' + ( this.state.isGoing == 'going' ? 'show' : 'hide' ) }>
                  <h3>Yay! So, who's your plus one?</h3>
                  <input type="text" className="form-control" placeholder="Their full name, please!" />
                </div>

                <div className={ 'form-group ' + ( this.state.isGoing == 'not going' ? 'show' : 'hide' ) }>
                  <h3>
                    Aww! Too bad. Atleast, you can always contribute to our <Link to="/fund">Honeymoon Fund</Link>.
                  </h3>
                  <img src="http://www.reactiongifs.com/wp-content/uploads/2012/06/when-you-try-to-wink1.gif" />
                </div>

                <button className={ 'btn btn-submit btn-lg btn-block ' + ( !this.state.isGoing ? 'hide' : 'show' ) }>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
    );
  }
}

export default RSVPCmp;
