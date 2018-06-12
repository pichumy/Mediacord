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

export const joinServer = (serverId) => {
  return $.ajax({
    method: "POST",
    url: `api/servers/${serverId}/join_server`
  })
}

//TODO: getServer, updateServer, deleteServer
