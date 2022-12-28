import {
  CURRENCY_INPUT,
  AWESOMEAPI,
  EXPENSES_INPUT,
  BTN_DELETE,
  BTN_EDIT,
  ADD_EXCHANGERATES,
} from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case CURRENCY_INPUT:
    return { ...state };
  case AWESOMEAPI:
    return {
      ...state,
      currencies: Object.keys(action.payload).filter((info) => info !== 'USDT'),
    };
  case EXPENSES_INPUT:
    return {
      ...state,
      expenses: [...state.expenses, {
        id: state.expenses.length,
        value: action.payload.state.value,
        currency: action.payload.state.currency,
        method: action.payload.state.method,
        tag: action.payload.state.tag,
        description: action.payload.state.description,
        exchangeRates: action.payload.currency,
      }],
    };
  case BTN_DELETE:
    return {
      ...state,
      expenses: action.payload,
    };
  case BTN_EDIT:
    return {
      ...state,
      editor: true,
      idToEdit: Number(action.payload),
    };
  case ADD_EXCHANGERATES:
    return {
      ...state,
      editor: false,
      expenses: state.expenses.map((expense) => (
        expense.id === state.idToEdit ? {
          id: action.payload.state.id,
          value: action.payload.state.value,
          currency: action.payload.state.currency,
          method: action.payload.state.method,
          tag: action.payload.state.tag,
          description: action.payload.state.description,
          exchangeRates: action.payload.exchangeRates }
          : expense)),
    };
  default:
    return state;
  }
};

export default wallet;
