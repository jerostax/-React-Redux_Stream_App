import React from 'react';

class GoogleAuth extends React.Component {
  state = { isSignedIn: null };

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '629812139829-nccuf03a5caukfosrpmdqr1bdhfg874o.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.setState({ isSignedIn: this.auth.isSignedIn.get()}); // Refacto possible de cette ligne => this.onAuthChange()
        this.auth.isSignedIn.listen(this.onAuthChange);
      });
    });
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  onSignIn = () => {
    this.auth.signIn();
  };

  onSignOut = () => {
    this.auth.signOut();

  };

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return null;
    } else if (this.state.isSignedIn) {
      return (
        <button onClick={this.onSignOut} className="ui red google button">
          <i className="google icon" />
          Déconnexion
        </button>
      );
    } else {
      return  (
        <button onClick={this.onSignIn} className="ui blue google button">
          <i className="google icon" />
          Connexion avec Google
        </button>
      );
    }
  }
  render() {
    return (
      <div>{this.renderAuthButton()}</div>
    );
  }
}

export default GoogleAuth;
