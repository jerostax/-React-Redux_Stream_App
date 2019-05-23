import React from 'react';

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '629812139829-nccuf03a5caukfosrpmdqr1bdhfg874o.apps.googleusercontent.com',
        scope: 'email'
      });
    });
  }
  render() {
    return(
      <div>Google Auth</div>
    );
  }
}

export default GoogleAuth;
