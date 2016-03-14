import React from 'react';
import { Link } from 'react-router';
import Validator from 'validator';
import NavCmp from '../Common/Nav';
import RSVPActionCreators from '../../actions/RSVPActionCreators';

class RSVPCmp extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      formValid: false,
      formInvalidMsg: undefined,
      fullnamePristine: true,
      fullnameValid: false,
      fullname: undefined,
      plusOnePristine: true,
      plusOneValid: false,
      plusOne: undefined,
      isComing: false,
    };
  }

  _onBlur( evt ) {
    var nameVal = evt.target.name;
    var funcString = '_validate' + nameVal.charAt( 0 ).toUpperCase() + nameVal.slice( 1 );
    var stateObj = this[ funcString ]( evt.target.value );

    this.setState( stateObj );
  }

  _validateFullname( val ) {
    var stateObj = {};

    stateObj.fullnamePristine = false;
    stateObj.fullnameValid = ( val.length > 0 );

    if( stateObj.fullnameValid ) {
      stateObj.formValid = true;
    } else {
      stateObj.formValid = false;
    }

    return stateObj;
  }

  _validatePlusOne( val ) {
    var stateObj = {};

    stateObj.plusOnePristine = false;
    stateObj.plusOneValid = ( val.length > 0 );

    if( stateObj.plusOneValid ) {
      stateObj.formValid = true;
    } else {
      stateObj.formValid = false;
    }

    return stateObj;
  }

  _onClickComing( val, evt ) {
    this.setState({ isComing: val });
  }

  _onSubmit( evt ) {
    evt.preventDefault();
    this.setState({ isLoading: true });

    RSVPActionCreators.sendRSVP( this.state );
  }

  render() {
    return (
        <div id="rsvp">
          <NavCmp />
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <img src="http://placehold.it/350x300" className="img-responsive" />
              </div>

              <form className="col-md-6" onSubmit={ this._onSubmit.bind( this ) }>
                <h2>Tell us if you're coming!</h2>

                <div className="form-group has-validation">
                  <input type="text" name="fullname" className="form-control" placeholder="Full name" onBlur={ this._onBlur.bind( this ) } />

                  <div className="validation-result">
                    <div className={ 'result ' + ( ( this.state.fullnameValid ) ? 'valid' : '' ) }>
                      <i className="fa fa-check-square"></i>
                    </div>

                    <div className={ 'result ' + ( ( !this.state.fullnameValid && !this.state.fullnamePristine ) ? 'invalid' : '' ) }>
                      <i className="fa fa-exclamation-triangle"></i> Invalid field
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <button className="btn btn-going btn-lg btn-block" onClick={ this._onClickComing.bind( this, 'going' ) }>
                      The fuck yea!
                    </button>
                  </div>
                  <div className="col-md-6">
                    <button className="btn btn-not-going btn-lg btn-block" onClick={ this._onClickComing.bind( this, 'not going' ) }>
                      No, I am a dookiehead!
                    </button>
                  </div>
                </div>

                <div id="going" className={ 'form-group ' + ( this.state.isComing == 'going' ? 'show' : 'hide' ) }>
                  <h3>Yay! So, who is your plus one?</h3>
                  <div className="has-validation">
                    <input type="text" name="plusOne" className="form-control" placeholder="Their full name, please!" onBlur={ this._onBlur.bind( this ) } />

                    <div className="validation-result">
                      <div className={ 'result ' + ( ( this.state.plusOneValid ) ? 'valid' : '' ) }>
                        <i className="fa fa-check-square"></i>
                      </div>

                      <div className={ 'result ' + ( ( !this.state.plusOneValid && !this.state.plusOnePristine ) ? 'invalid' : '' ) }>
                        <i className="fa fa-exclamation-triangle"></i> Invalid field
                      </div>
                    </div>
                  </div>
                </div>

                <div className={ 'form-group ' + ( this.state.isComing == 'not going' ? 'show' : 'hide' ) }>
                  <h3>
                    Aww! Too bad. Atleast, you can always contribute to our <Link to="/fund">Honeymoon Fund</Link>.
                  </h3>
                  <img src="http://www.reactiongifs.com/wp-content/uploads/2012/06/when-you-try-to-wink1.gif" />
                </div>

                <button className={ 'btn btn-submit btn-lg btn-block ' + ( !this.state.isComing ? 'hide' : 'show' ) } disabled={ !this.state.formValid || this.state.isLoading }>
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
