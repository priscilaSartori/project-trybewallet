export const EMAIL_INPUT = 'EMAIL_INPUT';
export const CURRENCY_INPUT = 'CURRENCY_INPUT';
export const AWESOMEAPI = 'AWESOMEAPI';
export const EXPENSES_INPUT = 'EXPENSES_INPUT';
export const BTN_DELETE = 'BTN_DELETE';
export const BTN_EDIT = 'BTN_EDIT';
export const BTN_SAVE = 'BTN_SAVE';
export const EDIT_STATE = 'EDIT_STATE';

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

export const btnDelete = (payload) => ({
  type: BTN_DELETE,
  payload,
});

export const btnEdit = (payload) => ({
  type: BTN_EDIT,
  payload,
});

export const btnSave = () => ({
  type: BTN_SAVE,
});

export const editState = (payload) => ({
  type: EDIT_STATE,
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

export function fetchprice(state) {
  return async (dispatch) => {
    dispatch(currencyInput());
    return fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((currency) => dispatch(submitWalletForm(state, currency)));
  };
}
