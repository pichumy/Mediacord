export const channelsSelector = (state, serverId) => {
  let object = {};
  Object.keys(state.entities.channels).forEach(key => {
    let channel = state.entities.channels[key]
    // Note: implicit comparison between string and integer
    if(channel.server_id == serverId){
      // array.push(channel);
      object[channel.id] = channel;
    }
  });
  return object;
}