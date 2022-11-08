import { screen } from '@testing-library/react';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import Wallet from '../pages/Wallet';

describe('2 - Crie um header para a página de carteira contendo as seguintes características:', () => {
  it('Um elemento que exiba o email do usuário que fez login.', () => {
    renderWithRouterAndRedux(<Wallet />);
    const email = screen.getByText(/Email/i);
    expect(email).toBeInTheDocument();
  });

  it('Crie um campo com a despesa total gerada pela lista de gastos.', () => {
    renderWithRouterAndRedux(<Wallet />);
    const despesa = screen.getByText(/Despesa total/i);
    expect(despesa).toBeInTheDocument();
  });

  it('Crie um campo que mostre que qual câmbio está sendo utilizado, que será neste caso \'BRL\'', () => {
    renderWithRouterAndRedux(<Wallet />);
    const cambio = screen.getByText(/BRL/i);
    expect(cambio).toBeInTheDocument();
  });
});
