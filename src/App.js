import React, { Component } from 'react';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import { LoginCallback, Security, SecureRoute } from '@okta/okta-react';
import Home from './Home';
import Profile from './Profile';
import CallBackLogin from './CallBackLogin';
//00cMuPG5B8wFLYURLTQhfXqokxiXqofY1WUzNip294
const oktaAuth = new OktaAuth({
  issuer: 'https://dev-86442992.okta.com/oauth2/default	',
  clientId: '0oaedltsj8jQ0BbBC5d7',
  redirectUri: window.location.origin + '/login/callback'
});

class App extends Component {

  componentDidMount() {
    console.log('App, component did mount');
    console.log('App, component did mount, window location');

  }

  constructor(props) {
    super(props);
    this.restoreOriginalUri = async (_oktaAuth, originalUri) => {
      props.history.replace(toRelativeUrl(originalUri || '/', window.location.origin));
    };
  }

  render() {
    return (
      <Security oktaAuth={oktaAuth} restoreOriginalUri={this.restoreOriginalUri}>
        <Route path="/" exact={true} component={Home}/>
        <Route path="/login/callback" component={CallBackLogin}/>
        <Route path="/profile" component={Profile}/>
      </Security>
    );
  }
}

const AppWithRouterAccess = withRouter(App);

class RouterApp extends Component {
  render() {
    return (<Router><AppWithRouterAccess/></Router>);
  }
}

export default RouterApp;
