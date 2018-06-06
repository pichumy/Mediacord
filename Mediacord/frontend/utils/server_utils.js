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

//TODO: getServer, updateServer, deleteServer
