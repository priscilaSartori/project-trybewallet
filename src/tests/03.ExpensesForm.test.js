import { screen } from '@testing-library/react';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import Wallet from '../pages/Wallet';

describe('3 - Desenvolva um formulário para adicionar uma despesa contendo as seguintes características:', () => {
  it('Um campo para adicionar o valor da despesa', () => {
    renderWithRouterAndRedux(<Wallet />);
    const value = screen.getByText(/Valor da despesa/i);
    expect(value).toBeInTheDocument();
  });

  it('Um campo para adicionar a descrição da despesa', () => {
    renderWithRouterAndRedux(<Wallet />);
    const description = screen.getByText(/Descrição da despesa/i);
    expect(description).toBeInTheDocument();
  });

  it('Um campo para selecionar em qual moeda será registrada a despesa', () => {
    renderWithRouterAndRedux(<Wallet />);
    const currency = screen.getByTestId('currency-input');
    expect(currency).toBeInTheDocument();
  });

  it('Um campo para selecionar qual método de pagamento será utilizado', () => {
    renderWithRouterAndRedux(<Wallet />);
    const method = screen.getByText(/Dinheiro/i);
    expect(method).toBeInTheDocument();
  });

  it('Um campo para selecionar uma categoria (tag) para a despesa.', () => {
    renderWithRouterAndRedux(<Wallet />);
    const tag = screen.getByText(/Alimentação/i);
    expect(tag).toBeInTheDocument();
  });
});
