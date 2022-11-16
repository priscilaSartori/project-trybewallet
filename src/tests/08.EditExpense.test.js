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

  // it('O botão habilita um formulário para editar a linha da tabela ao ser clicado, '
  //   + 'após clicar em "Editar despesa" a despesa é atualizada e atualiza a soma de despesas no header.', () => {
  // });
});
