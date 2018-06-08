import { connect } from 'react-redux';
import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { createChannel } from '../../actions/channel_actions';
import ChannelForm from './channel_form';
import { withRouter } from 'react-router-dom'

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.channel,
  serverId: ownProps.location.pathname.substring(9)
})

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal()),
  createChannel: (channelForm) => dispatch(createChannel(channelForm))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChannelForm));
