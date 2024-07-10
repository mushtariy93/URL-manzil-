function getUsers(names) {
  const fetchUser=(name) => {
    return fetch(`https://api.github.com/users/${name}`)
      .then((response) => {
        if (!response.ok) {
          return null;
        }
        return response.json();
      })
      .catch(() => {
        return null;
      });
  };

  const userPromises = [];
  for (let i = 0; i < names.length; i++) {
    userPromises.push(fetchUser(names[i]));
  }

  return Promise.all(userPromises);
}

const usernames = ["octocat", "torvalds", "nivey"];
getUsers(usernames).then((users) => console.log(users));
