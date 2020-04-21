// import isEmpty from './Validation/is-empty';

import { SET_CURRENT_USER } from '../actions/authActions/types';

const initialState = {
  isAuthenticated: false,
  user: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        // isAuthenticated: !isEmpty(action.payload),
        isAuthenticated: !state.isAuthenticated,
        user: action.payload
      };
    default:
      return state;
  }
}

