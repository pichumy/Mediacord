import { connect } from 'react-redux';
import React from 'react';
import { openModal } from '../../actions/modal_actions';
import ChannelSettingsBar from './channel_settings_bar';

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.channel
})

const mapDispatchToProps = dispatch => ({
  openModal: () => dispatch(openModal('Create Channel'))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChannelSettingsBar);
