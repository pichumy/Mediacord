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

export const onlineUsers = (state) => {
  let online = [];
  Object.values(state.entities.userList).map(user => {
    if (user.offline === false ){
      online.push(user);
    }
  });
  return online;
}

export const offlineUsers = (state) => {
  let offline = [];
  Object.values(state.entities.userList).map(user => {
    if (user.offline === true){
      offline.push(user)
    }
  });
  return offline;
}

export const messageSelector = (state) => {
  let array = [];
  Object.values(state.entities.messages).map(message => {
    array.push(message);
  })
  return { array }
}
