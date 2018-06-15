export const getMessages = (channelId) => {
  return $.ajax({
    method: "GET",
    url: `api/channels/${channelId}`
  })
}

export const postMessage = (message) => {
  return $.ajax({
    method: "POST",
    url: 'api/messages',
    data: { message }
  })
}
