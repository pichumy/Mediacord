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

//TODO: getServer, updateServer, deleteServer
