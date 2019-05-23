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
        this.setState({ isSignedIn: this.auth.isSignedIn.get()})
      });
    });
  }

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return <div>Je ne sais pas si je suis connecté</div>
    } else if (this.state.isSignedIn) {
      return <div>Je suis connecté</div>
    } else {
      return <div>Je ne suis pas connecté</div>
    }
  }
  render() {
    return (
      <div>{this.renderAuthButton()}</div>
    );
  }
}

export default GoogleAuth;
