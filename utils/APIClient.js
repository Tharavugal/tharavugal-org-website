export default class APIClient {
  static async get(url, headers = {}) {
    const res = await fetch(url, {
      headers: {
        Authorization: JSON.parse(localStorage.getItem('user'))?.authToken,
        ...headers,
      },
    });

    if (!res.ok) {
      const error = new Error(res.statusText);
      error.status = res.status;
      if (res.status === 401) {
        localStorage.clear();
        window.location = '/';
      }
      throw error;
    }

    return res.json();
  }

  static async post(url, data, patch = false, headers = {}) {
    const response = await fetch(url, {
      method: patch ? 'PATCH' : 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: JSON.parse(localStorage.getItem('user'))?.authToken,
        ...headers,
      },
      body: JSON.stringify(data),
    });

    return {
      ok: response.ok,
      status: response.status,
      data: await response.json(),
    };
  }

  static async delete(url, data, headers = {}) {
    const response = await fetch(url + `?id=${data.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: JSON.parse(localStorage.getItem('user'))?.authToken,
        ...headers,
      },
      body: null,
    });

    return {
      ok: response.ok,
      status: response.status,
      data: await response.json(),
    };
  }
}
