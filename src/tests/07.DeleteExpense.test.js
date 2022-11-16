import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import React from 'react';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import Wallet from '../pages/Wallet';

const valueInput = 'value-input';
const currencyInput = 'currency-input';
const methodInput = 'method-input';
const descriptionInput = 'description-input';
const onze = 'Onze dólares';
const cartãoCrédito = 'Cartão de crédito';

describe('7 - Crie um botão para deletar uma despesa da tabela contendo as seguintes características:', () => {
  it('O botão deve estar dentro do último item da linha da tabela e deve possuir `data-testid="delete-btn"`', async () => {
    renderWithRouterAndRedux(<Wallet />);
    const value = screen.getByTestId(valueInput);
    userEvent.type(value, '11');

    const currency = screen.getByTestId(currencyInput);
    userEvent.type(currency, 'USD');

    const method = screen.getByTestId(methodInput);
    userEvent.type(method, cartãoCrédito);

    const tag = screen.getByTestId('tag-input');
    userEvent.type(tag, 'Lazer');

    const description = screen.getByTestId(descriptionInput);
    userEvent.type(description, onze);

    const button = screen.getByRole('button');
    userEvent.click(button);

    const btnExcluir = await screen.findByText('Excluir');
    expect(btnExcluir).toBeInTheDocument();
  });

  it('Ao ser clicado, o botão deleta a linha da tabela, alterando o estado global.', async () => {
    renderWithRouterAndRedux(<Wallet />);
    const value = screen.getByTestId(valueInput);
    userEvent.type(value, '11');

    const currency = screen.getByTestId(currencyInput);
    userEvent.type(currency, 'USD');

    const method = screen.getByTestId(methodInput);
    userEvent.type(method, cartãoCrédito);

    const tag = screen.getByTestId('tag-input');
    userEvent.type(tag, 'Lazer');

    const description = screen.getByTestId(descriptionInput);
    userEvent.type(description, onze);

    const button = screen.getByRole('button');
    userEvent.click(button);

    const btnExcluir = await screen.findByText('Excluir');
    userEvent.click(btnExcluir);
    expect(btnExcluir).not.toBeInTheDocument();
  });

  it('Ao clicar no botão para remover uma despesa, o valor correspondente deve ser subtraído e a despesa total deve ser atualizada no header', async () => {
    renderWithRouterAndRedux(<Wallet />);
    const value = screen.getByTestId(valueInput);
    userEvent.type(value, '11');

    const currency = screen.getByTestId(currencyInput);
    userEvent.type(currency, 'USD');

    const method = screen.getByTestId(methodInput);
    userEvent.type(method, cartãoCrédito);

    const tag = screen.getByTestId('tag-input');
    userEvent.type(tag, 'Lazer');

    const description = screen.getByTestId(descriptionInput);
    userEvent.type(description, onze);

    const button = screen.getByRole('button');
    userEvent.click(button);

    const btnExcluir = await screen.findByText('Excluir');
    userEvent.click(btnExcluir);

    const valorTotal = screen.getByTestId('total-field');
    expect(valorTotal).toBeInTheDocument(0.00);
  });
});
