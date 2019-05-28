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

export default connect(mapStateToProps, { fetchStream })(StreamDelete);
