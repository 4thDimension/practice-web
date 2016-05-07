import {UPDATE_EMAIL, SAVE_EMAIL} from '../actions';

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  email: '',
  isSending: false
};

export default function homeReducer (state = initialState, action) {
  switch (action.type) {
    case UPDATE_EMAIL:
      return Object.assign({}, state, action.payload);
    case SAVE_EMAIL:
      return Object.assign({}, state, {
        isSending: false
      });
    default:
      return state;
  }
}
