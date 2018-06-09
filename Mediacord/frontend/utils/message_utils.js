export const getMessages = (logId) => {
  return $.ajax({
    method: "GET",
    url: `api/logs/${logId}`
  })
}
