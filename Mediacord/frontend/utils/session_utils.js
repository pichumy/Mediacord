export const postUser = (user) => {
  return $.ajax( {
    method: 'POST',
    url: '/api/users/',
    data: { user }
  });
};

export const patchUser = (user) => {
  return $.ajax( {
    method: 'PATCH',
    url: `/api/users/${user.id}`,
    data: { user: {
      avatar_url: user.avatar_url,
      username: user.username,
      offline: user.offline
      }
    }
  })
}

export const postSession = (user) => {
  return $.ajax({
    method: 'POST',
    url: '/api/sessions',
    data: { user }
  });
};

export const deleteSession = () => {
  return $.ajax({
    method: 'DELETE',
    url: '/api/sessions'
  });
};
