export function getUser() {
  async function apiCall(user: string) {
    return fetch(`https://api.github.com/users/${user}`).then((r) => r.json());
  }

  return { apiCall };
}

export function getRepos() {
  async function apiCall(user: string) {
    return fetch(`https://api.github.com/users/${user}/repos`).then((r) => r.json());
  }

  return { apiCall };
}
