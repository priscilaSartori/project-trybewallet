import { EMAIL_INPUT } from '../actions/index';

const INITIAL_STATE = {
  email: '',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case EMAIL_INPUT:
    return { email: action.payload };
  default:
    return state;
  }
};

export default user;
