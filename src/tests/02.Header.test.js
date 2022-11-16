import { screen } from '@testing-library/react';
// simport userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import Wallet from '../pages/Wallet';
// import mockWallet from './helpers/mockWallet';
import mockUser from './helpers/mockUser';

// const onze = 'Onze dólares';
// const cartãoCrédito = 'Cartão de crédito';

describe('2 - Crie um header para a página de carteira contendo as seguintes características:', () => {
  it('Um elemento que exiba o email do usuário que fez login.', () => {
    renderWithRouterAndRedux(<Wallet />, { INITIAL_STATE: mockUser });
    const email = screen.getByTestId('email-field');
    expect(email).toBeInTheDocument('alguem@email.com');
  });

  it('Crie um campo com a despesa total gerada pela lista de gastos.', () => {
    renderWithRouterAndRedux(<Wallet />);
    // const INITIAL_STATE = {
    //   currencies: [],
    //   expenses: [],
    //   editor: false,
    //   idToEdit: 0,
    // };
    // renderWithRouterAndRedux(<Wallet />, { INITIAL_STATE });
    // const value = screen.getByTestId('value-input');
    // userEvent.type(value, '11');

    // const currency = screen.getByTestId('currency-input');
    // userEvent.type(currency, 'USD');

    // const method = screen.getByTestId('method-input');
    // userEvent.type(method, cartãoCrédito);

    // const tag = screen.getByTestId('tag-input');
    // userEvent.type(tag, 'Lazer');

    // const description = screen.getByTestId('description-input');
    // userEvent.type(description, onze);

    // const button = screen.getByRole('button');
    // userEvent.click(button);

    const valorTotal = screen.getByTestId('total-field');
    expect(valorTotal).toBeInTheDocument(0.00);
  });

  it('Crie um campo que mostre que qual câmbio está sendo utilizado, que será neste caso \'BRL\'', () => {
    renderWithRouterAndRedux(<Wallet />);
    const cambio = screen.getByText(/BRL/i);
    expect(cambio).toBeInTheDocument();
  });
});
