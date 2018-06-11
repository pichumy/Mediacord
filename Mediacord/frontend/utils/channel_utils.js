export const postChannel = (channel) => {
  console.log(channel);
  return $.ajax({
    method: "post",
    url: "api/channels/",
    data: { channel }
  })
}

export const getChannels = (serverId) => {
  return $.ajax({
    method: "GET",
    url: `api/servers/${serverId}`,
  })
}
