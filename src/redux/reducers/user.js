import { EMAIL_INPUT_TEST_ID } from '../actions/index';

const INITIAL_STATE = {
  user: {
    email: '',
  },
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case EMAIL_INPUT_TEST_ID:
    return { email: action.payload };

  default:
    return state;
  }
};

export default user;
