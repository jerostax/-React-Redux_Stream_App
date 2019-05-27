import React from 'react';
import Modal from '../Modal';
import history from '../../history';

const StreamDelete = () => {
  const actions = (
    <React.Fragment>
      <button className="ui button negative">Supprimer</button>
      <button className="ui button">Annuler</button>
    </React.Fragment>
  );
  return (
    <div>
      StreamDelete
      <Modal 
        title="Supprimer ce Stream"
        content="Êtes vous sur de vouloir supprimer ce Stream?"
        actions={actions}
        onDismiss={() =>  history.push('/')}
      />
    </div>
  );
}

export default StreamDelete;
