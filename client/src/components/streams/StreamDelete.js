import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from '../Modal';
import history from '../../history';
import { fetchStream, deleteStream } from '../../actions';

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
  renderActions() {
    const { id } = this.props.match.params;
    return (
      <React.Fragment>
        <button onClick={() => this.props.deleteStream(id)} className="ui button negative">Supprimer</button>
        <Link to="/" className="ui button">Annuler</Link>
      </React.Fragment>
    );
  }

  renderContent() {
    if (!this.props.stream) {
      return 'Êtes vous sur de vouloir supprimer ce Stream?'
    }

    return `Êtes vous sur de vouloir supprimer le Stream ${this.props.stream.title}?`
  }

  render() {
    return (
        <Modal
          title="Supprimer ce Stream"
          content={this.renderContent()}
          actions={this.renderActions()}
          onDismiss={() => history.push('/')}
        />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id]}
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);
