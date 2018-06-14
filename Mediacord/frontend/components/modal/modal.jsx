import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import CreateChannelContainer from '../channels/create_channel_container';
import ServerFormContainer from '../servers/server_form_container';
import UserSearch from '../friends/user_search_container';

function Modal({modal, closeModal}){
  if (!modal){
    return null;
  }
  let component;
  switch (modal){
    case 'Create Channel':
      component = <CreateChannelContainer />;
      break;
    case 'Server':
      component = <ServerFormContainer />;
      break;
    case 'Users':
      component = <UserSearch />
      break; 
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child">
        { component }
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
