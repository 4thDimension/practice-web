import fetch from 'isomorphic-fetch';

// ------------------------------------
// Constants
// ------------------------------------
export const UPDATE_EMAIL = 'UPDATE_EMAIL';
export const SAVE_EMAIL = 'SAVE_EMAIL';

// ------------------------------------
// Actions
// ------------------------------------
export function updateEmail (email) {
  return {
    type: UPDATE_EMAIL,
    payload: { email }
  };
}

export function saveEmail (email) {
  return () => {
    return fetch('/api/notification', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({ email })
    }).then(response => {
      if (response.status >= 400) {
        throw new Error('email was not saved');
      }
      return response.json();
    });
  };
}

export const actions = {
  updateEmail,
  saveEmail
};
