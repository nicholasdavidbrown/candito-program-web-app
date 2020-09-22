import React from 'react';

import { withFirebase } from '../Firebase';

const SignOutButton = ({ firebase }) => (
  <a onClick={firebase.doSignOut}>
    <span aria-hidden="true">👉</span>
    Sign Out
  </a>
);

export default withFirebase(SignOutButton);
