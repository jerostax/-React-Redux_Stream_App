import React from 'react';
import { connect } from 'react-redux';
import Modal from '../Modal';
import history from '../../history';
import { fetchStream } from '../../actions';

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
  renderActions() {
    return (
      <React.Fragment>
        <button className="ui button negative">Supprimer</button>
        <button className="ui button">Annuler</button>
      </React.Fragment>
    );
  }
  render() {
    return (
      <div>
        StreamDelete
        <Modal
          title="Supprimer ce Stream"
          content="Êtes vous sur de vouloir supprimer ce Stream?"
          actions={this.renderActions()}
          onDismiss={() => history.push('/')}
        />
      </div>
    );
  }
}

export default connect(null, { fetchStream })(StreamDelete);
