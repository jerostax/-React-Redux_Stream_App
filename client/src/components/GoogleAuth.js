import React from 'react';

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '629812139829-tnerc7vinutkq4t4g1g9g1sricnqhkkq.apps.googleusercontent.com',
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
