import React from 'react';
import ReactDOM from 'react-dom';
import history from '../history';

const Modal = props => {
  return ReactDOM.createPortal(
    <div onClick={() => history.push('/')} className="ui dimmer modals visible active">
      <div onClick={(e) => e.stopPropagation()} className="ui standard modal visible active">
        <div className="header">Supprimer ce Stream</div>
        <div className="content">
        Êtes vous sur de vouloir supprimer ce Stream?
        </div>
        <div className="actions">
          <wbutton className="ui negative button">Supprimer</wbutton>
          <button className="ui button">Annuler</button>
        </div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;

