/* @flow */
import React from 'react';
import HomeBg from 'modules/App/assets/home-bg.jpg';
import classes from './../HomeView.scss';
import { actions } from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Navigation from 'modules/App/components/navigation';

type Props = {};

class HomeView extends React.Component<void, Props, void> {
  onChangeEmail (event) {
    this.props.updateEmail(event.target.value);
  }

  onSubmitEmail () {
    this.props.saveEmail(this.props.email)
      .then(() => { this.props.history.push('/thank-you'); });
  }

  render () {
    return (
      <div style={{height: '100%'}}>
        <Navigation />
        <div className={classes['main']} style={{backgroundImage: `url(${HomeBg})`}}>
          <div className='container text-center'>
            <h1 className={classes['main-text']}>
              Easier to find your perfect new home
            </h1>
            <form className={classes['subscribe-form']}>
              <label>Be the first to subscribe and get access to premium features</label>
              <div className='row'>
                <div className='col-sm-6 col-sm-offset-3'>
                  <div className='row'>
                    <div className='col-sm-8'>
                      <input
                        onChange={::this.onChangeEmail}
                        value={this.props.email}
                        type='email'
                        placeholder={'Your Email'}
                      />
                    </div>
                    <div className='col-sm-4' >
                      <button onClick={::this.onSubmitEmail} type='button'> Submit</button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

HomeView.propTypes = {
  updateEmail: React.PropTypes.func,
  saveEmail: React.PropTypes.func,
  email: React.PropTypes.string,
  history: React.PropTypes.object
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
};

const mapStateToProps = (state) => ({
  email: state.homeReducer.email
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
