import { CURRENCY_INPUT, AWESOMEAPI, EXPENSES_INPUT } from '../actions/index';

const INITIAL_STATE = {
  currencies: [], // array de string
  expenses: [
    { id: 0,
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
      price: {},
    },
  ], // array de objetos, com cada objeto tendo as chaves id, value, currency, method, tag, description e exchangeRates
  editor: false, // valor booleano que indica de uma despesa está sendo editada
  idToEdit: 0, // valor numérico que armazena o id da despesa que esta sendo editada
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case CURRENCY_INPUT:
    return { ...state };
  case AWESOMEAPI:
    return { ...state,
      currencies: Object.keys(action.payload).filter((info) => info !== 'USDT') };
  case EXPENSES_INPUT:
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
