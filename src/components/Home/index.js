import React from 'react';
import { compose } from 'recompose';
import styled from 'styled-components';

import { withAuthorization, withEmailVerification } from '../Session';
import Messages from '../Messages';

import Select from '../Select'

const HomePage = () => (
  <div>
    <h1>Home Page</h1>
    <p>The Home Page is accessible by every signed in user.</p>
    <Select />
    {/* <Messages /> */}
  </div>
);

const condition = authUser => !!authUser;

export default compose(
  withEmailVerification,
  withAuthorization(condition),
)(HomePage);
