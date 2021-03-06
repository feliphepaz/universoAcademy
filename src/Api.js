export const API_URL = 'https://formulabor.com.br/universo-api/json';

export function TOKEN_POST(body) {
  return {
    url: API_URL + '/jwt-auth/v1/token',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
};

export function TOKEN_VALIDATE_POST(token) {
  return {
    url: API_URL + '/jwt-auth/v1/token/validate',
    options: {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + token,
      },
    },
  };
};

export function USER_GET(token) {
  return {
    url: API_URL + '/v1/user',
    options: {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + token,
      },
    },
  };
};

export function USER_POST(body) {
  return {
    url: API_URL + '/v1/user',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
};

export function PASSWORD_LOST(body) {
  return {
    url: API_URL + '/v1/password/lost',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
};

export function PASSWORD_RESET(body) {
  return {
    url: API_URL + '/v1/password/reset',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
};