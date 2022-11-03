export const EMAIL_INPUT = 'EMAIL_INPUT';
export const CURRENCY_INPUT = 'CURRENCY_INPUT';
export const AWESOMEAPI = 'AWESOMEAPI';
export const EXPENSES_INPUT = 'EXPENSES_INPUT';

export const emailImput = (payload) => ({
  type: EMAIL_INPUT,
  payload,
});

// action creator
const currencyInput = () => ({
  type: CURRENCY_INPUT,
});

// action creator
const awesomeapi = (payload) => ({
  type: AWESOMEAPI,
  payload,
});

export function fetchcurrency() {
  return async (dispatch) => {
    dispatch(currencyInput());
    return fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((currency) => dispatch(awesomeapi(currency)));
  };
}

export const submitWalletForm = (payload) => ({
  type: EXPENSES_INPUT,
  payload,
});

export function fetchprice() {
  return async (dispatch) => {
    dispatch(currencyInput());
    return fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((currency) => dispatch(submitWalletForm(currency)));
  };
}
