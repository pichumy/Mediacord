export const getServers = () => {
  return $.ajax({
    method: "GET",
    url: "api/servers/"
  })
}

export const postServer = (server) => {
  return $.ajax({
    method: "POST",
    url: "api/servers/",
    data: { server }
  })
}

export const getUserList = (serverId) => {
  return $.ajax({
    method: "GET",
    url: `api/servers/${serverId}/user_list`
  })
}

export const joinServer = (serverId, userId) => {
  if(userId){
    return $.ajax({
      method: "POST",
      url: `api/servers/${serverId}/join_server`,
      data: {id: userId}
    })
  }
  return $.ajax({
    method: "POST",
    url: `api/servers/${serverId}/join_server`
  })
}


export const getPrivateServers = () => {
  return $.ajax({
    method: "GET",
    url: "api/searches/private",
  })
}

//TODO: getServer, updateServer, deleteServer
