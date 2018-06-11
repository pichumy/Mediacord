import { connect } from 'react-redux';
import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { createChannel } from '../../actions/channel_actions';
import ChannelForm from './channel_form';
import { withRouter } from 'react-router-dom';
import { matchPath } from 'react-router';


const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.channel,
})

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal()),
  createChannel: (channelForm) => dispatch(createChannel(channelForm))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChannelForm));
