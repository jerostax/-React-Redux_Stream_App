import React from 'react';
import Modal from '../Modal';

const StreamDelete = () => {
  const actions = (
    <div>
      <button className="ui button negative">Supprimer</button>
      <button className="ui button">Annuler</button>
    </div>
  );
  return (
    <div>
      StreamDelete
      <Modal 
        title="Supprimer ce Stream"
        content="Êtes vous sur de vouloir supprimer ce Stream?"
        actions={actions}
      />
    </div>
  );
}

export default StreamDelete;
