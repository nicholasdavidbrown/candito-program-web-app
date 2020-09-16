import React, { Component } from 'react';
import { compose } from 'recompose';

import { withAuthorization, withEmailVerification } from '../Session';
import { StyledForm } from './Home.styled';

import { AuthUserContext } from '../Session';
// import Messages from '../Messages';
// import Select from '../Select'

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bench: '',
      squat: '',
      deadlift: ''
    };
  }

  // myChangeHandler = (name, event) => {
  //   this.setState({ [name]: event.target.value });
  // }

  // // onSubmit = data => console.log(data);
  // onSubmit = (data, event, authUser) => {
  //   console.log(data)
  //   console.log(event)
  //   console.log(authUser)
  //   // this.props.firebase.user().update({
  //   //   inputs: {
  //   //     bench: data
  //   //   }
  //   // });
  //   event.preventDefault();
  // };

  render() {
    return (
      <AuthUserContext.Consumer>
        { authUser => (
          <>
            <h1>Inputs</h1>
            <StyledForm>
              <form>
                <div class="row">
                  <span>
                    <input class="balloon" id="name" type="text" placeholder="" /><label>Bench Press 1RM</label>
                  </span>
                </div>
                <div class='row'>
                  <span>
                    <input class="balloon" id="email" type="text" placeholder="" /><label>Squat 1RM</label>
                  </span>
                </div>
                <div class='row'>
                  <span>
                    <input class="balloon" id="email" type="text" placeholder="" /><label>Deadlift 1RM</label>
                  </span>
                </div>
                <input type="submit" />
              </form>
            </StyledForm>
          </>
        )}
      </AuthUserContext.Consumer >
    )
  }

};

const condition = authUser => !!authUser;

export default compose(
  withEmailVerification,
  withAuthorization(condition),
)(HomePage);
