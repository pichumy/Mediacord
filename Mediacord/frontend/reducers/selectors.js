export const channelsSelector = (state, serverId) => {
  let array = [];
  Object.keys(state.entities.channels).forEach(key => {
    let channel = state.entities.channels[key]
    // Note: implicit comparison between string and integer
    if(channel.server_id == serverId){
      array.push(channel);
    }
  });
  return array;
}
