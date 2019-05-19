import queryString from 'query-string';

const request = (url, data) => fetch(url, data);

const generateHeaders = () => {
  const headers = {
    Accept: 'application/json'
  };

  return headers;
};

const generateData = (method, body) => {
  const data = {
    method: method,
    headers: generateHeaders(),
  };
  if (body instanceof FormData) {
    data.body = body;
  } else {
    data.headers['Content-Type'] = 'application/json';
    if (body) {
      data.body = JSON.stringify(body);
    }
  }
  return data;
}

const generateFullUrl = (url, query) => {
  let fullUrl = `${url}`;
  if (query) {
    fullUrl = `${fullUrl}?${queryString.stringify(query)}`;
  }
  return fullUrl;
};

const parseResponse = (res) => {
  if (res.status === 204) {
    return null; // No content returned from server
  } else if (res.status >= 200 && res.status < 300) {
    return res.json();
  } else {
    return res.json().then(err => {
      const error = new Error(res.statusText);
      error.body = { ...err };
      throw error;
    });
  }
};

class Api {
  static fetch(method, url, { body, query }) {
    return request(
      generateFullUrl(url, query),
      generateData(method, body)
    ).then(parseResponse);
  }

  static get(url, params={}) {
    return Api.fetch('GET', url, params);
  }

  static post(url, params={}) {
    return Api.fetch('POST', url, params);
  }

  static put(url, params={}) {
    return Api.fetch('PUT', url, params);
  }

  static patch(url, params={}) {
    return Api.fetch('PATCH', url, params);
  }

  static delete(url, params={}) {
    return Api.fetch('DELETE', url, params);
  }
}

export default Api;
