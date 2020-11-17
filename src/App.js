import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import PrivateRoute from "./PrivateRoute";
import './scss/style.scss';

import { AuthProvider } from './services/auth.service'
import Loader from './components/Loader'

const loading = (
  <Loader />
)

// Containers
const TheLayout = React.lazy(() => import('./containers/neua/TheLayout'));

// Email App
const TheEmailApp = React.lazy(() => import('./views/apps/email/TheEmailApp'));

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'));
const Register = React.lazy(() => import('./views/pages/register/Register'));
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'));
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'));

class App extends Component {

  render() {
    return (
      <AuthProvider>
        <HashRouter>
          <React.Suspense fallback={loading}>
            <Switch>
              <Route exact path="/login" name="Login Page" render={props => <Login {...props} />} />
              <Route exact path="/register" name="Register Page" render={props => <Register {...props} />} />
              <Route exact path="/404" name="Page 404" render={props => <Page404 {...props} />} />
              <Route exact path="/500" name="Page 500" render={props => <Page500 {...props} />} />
              <PrivateRoute path="/" component={TheLayout} />
            </Switch>
          </React.Suspense>
        </HashRouter>
      </AuthProvider>
    );
  }
}

export default App;
