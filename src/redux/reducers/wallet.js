import { CURRENCY_INPUT, AWESOMEAPI, EXPENSES_INPUT,
  BTN_DELETE, BTN_EDIT, BTN_SAVE, EDIT_STATE } from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: '0',
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case CURRENCY_INPUT:
    return { ...state };
  case AWESOMEAPI:
    return { ...state,
      currencies: Object.keys(action.payload).filter((info) => info !== 'USDT') };
  case EXPENSES_INPUT:
    return { ...state,
      expenses: [...state.expenses, {
        id: state.expenses.length,
        value: action.payload.state.value,
        description: action.payload.state.description,
        currency: action.payload.state.currency,
        method: action.payload.state.method,
        tag: action.payload.state.tag,
        exchangeRates: action.payload.currency }] };
  case BTN_DELETE:
    return {
      ...state,
      expenses: action.payload,
    };
  case BTN_EDIT:
    return {
      ...state,
      editor: true,
      idToEdit: action.payload,
    };
  case BTN_SAVE:
    return {
      ...state,
      editor: false,
    };
  case EDIT_STATE:
    return { ...state,
      expenses: [...state.expenses, state.expenses.map((expense) => {
        if (expense.id === action.payload.id) {
          return action.payload;
        } return expense;
      })],
    };
  default:
    return state;
  }
};

export default wallet;
