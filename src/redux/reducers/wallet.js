import { CURRENCY_INPUT, AWESOMEAPI, EXPENSES_INPUT, BTN_DELETE } from '../actions/index';

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
    console.log(action.payload);
    return {
      ...state,
      expenses: action.payload,
    };
  default:
    return state;
  }
};

export default wallet;
