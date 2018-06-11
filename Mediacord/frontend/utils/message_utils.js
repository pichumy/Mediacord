export const getMessages = (channelId) => {
  return $.ajax({
    method: "GET",
    url: `api/channels/${channelId}`
  })
}
