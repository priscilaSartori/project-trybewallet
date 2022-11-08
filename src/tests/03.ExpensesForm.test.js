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

  // it('A chave currencies no estado global deve ser um array de siglas puxadas através de uma requisição à API', () => {
  // renderWithRouterAndRedux(<Wallet />);
  // const email = screen.getByText(/Email/i);
  // expect(email).toBeInTheDocument();
  // });

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
