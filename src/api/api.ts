import queryString from 'query-string';

const request = (url: string, data: any) => fetch(url, data);

const generateHeaders = (): Record<string, string> => {
  const headers = {
    Accept: 'application/json'
  };

  return headers;
};

const generateData = (method: string, body?: Record<string, unknown>) => {
  const data: Record<string, any> = {
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

const generateFullUrl = (url: string, query?: Record<string, string>) => {
  let fullUrl = `${url}`;
  if (query) {
    fullUrl = `${fullUrl}?${queryString.stringify(query)}`;
  }
  return fullUrl;
};

const parseResponse = (res: Response) => {
  if (res.status === 204) {
    return null; // No content returned from server
  } else if (res.status >= 200 && res.status < 300) {
    return res.json();
  } else {
    return res.json().then(err => {
      const error = new Error(res.statusText);
      throw error;
    });
  }
};

class Api {
  static fetch(method: string, url: string, { body, query }: { body?: Record<string, unknown>, query?: Record<string, string> }) {
    return request(
      generateFullUrl(url, query),
      generateData(method, body)
    ).then(parseResponse);
  }

  static get(url: string, params={}) {
    return Api.fetch('GET', url, params);
  }

  static post(url: string, params={}) {
    return Api.fetch('POST', url, params);
  }

  static put(url: string, params={}) {
    return Api.fetch('PUT', url, params);
  }

  static patch(url: string, params={}) {
    return Api.fetch('PATCH', url, params);
  }

  static delete(url: string, params={}) {
    return Api.fetch('DELETE', url, params);
  }
}

export default Api;
