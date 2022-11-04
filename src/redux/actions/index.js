export const EMAIL_INPUT = 'EMAIL_INPUT';
export const CURRENCY_INPUT = 'CURRENCY_INPUT';
export const AWESOMEAPI = 'AWESOMEAPI';
export const EXPENSES_INPUT = 'EXPENSES_INPUT';

export const emailImput = (payload) => ({
  type: EMAIL_INPUT,
  payload,
});

const currencyInput = () => ({
  type: CURRENCY_INPUT,
});

const awesomeapi = (payload) => ({
  type: AWESOMEAPI,
  payload,
});

export const submitWalletForm = (state, currency) => ({
  type: EXPENSES_INPUT,
  payload: {
    state,
    currency,
  },
});

export function fetchcurrency() {
  return async (dispatch) => {
    dispatch(currencyInput());
    return fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((currency) => dispatch(awesomeapi(currency)));
  };
}

export function fetchprice(state) {
  return async (dispatch) => {
    dispatch(currencyInput());
    return fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((currency) => dispatch(submitWalletForm(state, currency)));
  };
}
