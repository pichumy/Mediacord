import { connect } from 'react-redux';
import React from 'react';
import { openModal } from '../../actions/modal_actions';
import ChannelSettingsBar from './channel_settings_bar';
import { withRouter } from 'react-router-dom'

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.channel,
  server: state.entities.servers[ownProps.match.params.id]
})

const mapDispatchToProps = dispatch => ({
  openModal: () => dispatch(openModal('Create Channel'))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChannelSettingsBar));
