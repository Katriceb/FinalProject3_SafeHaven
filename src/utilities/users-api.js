// users-api.js
import { getToken } from './users-services';
import BASE_URL from './BASE_URL.js'
const USER_BASE = BASE_URL + '/api/users'

export function signUp(userData) {
  return sendRequest(USER_BASE, 'POST', userData);
}

export function login(credentials) {
  return sendRequest(`${USER_BASE}/login`, 'POST', credentials);
}

export function checkToken() {
    return sendRequest(`${USER_BASE}/check-token`)
}

/*--- Helper Functions ---*/

async function sendRequest(url, method = 'GET', payload = null) {
  // Fetch accepts an options object as the 2nd argument
  // used to include a data payload, set headers, etc.
  const options = { method };
  if (payload) {
    options.headers = { 'Content-Type': 'application/json' };
    options.body = JSON.stringify(payload);
  }

  // adding in to check token
  const token = getToken();
  if (token) {
    // Ensure the headers object exists
    options.headers = options.headers || {};
    // Add token to an Authorization header
    // Prefacing with 'Bearer' is recommended in the HTTP specification
    options.headers.Authorization = `Bearer ${token}`;
  }

  const res = await fetch(url, options);
  // res.ok will be false if the status code set to 4xx in the controller action
  if (res.ok) return res.json();
  throw new Error('Bad Request');
}

// export async function signUp(userData) {
//     // Fetch uses an options object as a second arg to make requests
//     // Other than basic GET requests, include data, headers, etc
//     const res = await fetch(USER_BASE, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         // Fetch requires data payloads to be stringified
//         // and assigned to a body property on the options sheet
//         body: JSON.stringify(userData)
//     });
//     // Check is the request was successful
//     if (res.ok) {
//         // res.json() will resolve to the JWT
//         return res.json();
//     } else {
//         throw new Error('Invalid Sign Up');
//     }
// }

// export async function login(credentials) {
    
//     const res = await fetch(USER_BASE+'/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         // Fetch requires data payloads to be stringified
//         // and assigned to a body property on the options sheet
//         body: JSON.stringify(credentials)
//     });
//     // Check is the request was successful
//     if (res.ok) {
//         // res.json() will resolve to the JWT
//         return res.json();
//     } else {
//         throw new Error('Invalid Sign Up');
//     }
// }

