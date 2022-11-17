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

describe('8 - Crie um botão para editar uma despesa da tabela contendo as seguintes características:', () => {
  it('O botão deve estar dentro do último item da linha da tabela e deve possuir `data-testid="edit-btn"`', async () => {
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

    const btnEditar = await screen.findByText('Editar');
    expect(btnEditar).toBeInTheDocument();
  });

  it('O botão habilita um formulário para editar a linha da tabela ao ser clicado', async () => {
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

    const btnEditar = await screen.findByText('Editar');
    userEvent.click(btnEditar);

    const btnEditarDespesa = await screen.findByText('Editar despesa');
    expect(btnEditarDespesa).toBeInTheDocument();
  });

  it('Após clicar em "Editar despesa" a despesa é atualizada e atualiza a soma de despesas no header.', async () => {
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

    const valorTotal = screen.getByTestId('total-field');
    expect(valorTotal).toBeInTheDocument(59.41);

    const btnEditar = await screen.findByText('Editar');
    userEvent.click(btnEditar);

    userEvent.type(value, '200');
    userEvent.type(description, 'duzentos dólares');

    const btnEditarDespesa = await screen.findByText('Editar despesa');
    userEvent.click(btnEditarDespesa);

    const newValueDespesa = await screen.findByText('200.00');
    expect(newValueDespesa).toBeInTheDocument();
    const newDescriptionDespesa = await screen.findByText('duzentos dólares');
    expect(newDescriptionDespesa).toBeInTheDocument();
    expect(valorTotal).toBeInTheDocument(1080.16);
  });
});
