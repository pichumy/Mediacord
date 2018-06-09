export const getLog = (channelId) => {
  return $.ajax({
    method: "GET",
    url: `api/channels/${channelId}`
  })
}
