import { screen } from '@testing-library/react';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import Wallet from '../pages/Wallet';
import mockUser from './helpers/mockUser';

describe('2 - Crie um header para a página de carteira contendo as seguintes características:', () => {
  it('Um elemento que exiba o email do usuário que fez login.', () => {
    renderWithRouterAndRedux(<Wallet />, { INITIAL_STATE: mockUser });
    const email = screen.getByTestId('email-field');
    expect(email).toBeInTheDocument('alguem@email.com');
  });

  it('Crie um campo com a despesa total gerada pela lista de gastos.', () => {
    renderWithRouterAndRedux(<Wallet />);
    const valorTotal = screen.getByTestId('total-field');
    expect(valorTotal).toBeInTheDocument(0.00);
  });

  it('Crie um campo que mostre que qual câmbio está sendo utilizado, que será neste caso \'BRL\'', () => {
    renderWithRouterAndRedux(<Wallet />);
    const cambio = screen.getByText(/BRL/i);
    expect(cambio).toBeInTheDocument();
  });
});
