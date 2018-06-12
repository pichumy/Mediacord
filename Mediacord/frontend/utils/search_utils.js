export const getUsers = (name) => {
  return $.ajax({
    method: "GET",
    url: "api/searches/users",
    data: { user: { name } }
  })
}

export const getServers = (name) => {
  return $.ajax({
    method: "GET",
    url: "api/searches/servers",
    data: { server: { name } }
  })
}
