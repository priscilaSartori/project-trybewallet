import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import React from 'react';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import Wallet from '../pages/Wallet';

const onze = 'Onze dólares';
const cartãoCrédito = 'Cartão de crédito';

describe('4 - Salve todas as informações do formulário no estado global', () => {
  it('Adiciona uma despesa e verifica se a soma de despesas do header foi atualizada e os inputs voltaram ao valor inicial', async () => {
    renderWithRouterAndRedux(<Wallet />);
    const value = screen.getByTestId('value-input');
    userEvent.type(value, '11');

    const currency = screen.getByTestId('currency-input');
    userEvent.type(currency, 'USD');

    const method = screen.getByTestId('method-input');
    userEvent.type(method, cartãoCrédito);

    const tag = screen.getByTestId('tag-input');
    userEvent.type(tag, 'Lazer');

    const description = screen.getByTestId('description-input');
    userEvent.type(description, onze);

    const button = screen.getByRole('button');
    userEvent.click(button);

    userEvent.type(value, '11');
    userEvent.type(currency, 'USD');
    userEvent.type(method, cartãoCrédito);
    userEvent.type(tag, 'Lazer');
    userEvent.type(description, onze);
    userEvent.click(button);

    const valorTotal = screen.getByTestId('total-field');
    expect(valorTotal).toBeInTheDocument(117.33);
    expect(value.value).toBe('');
    expect(description.value).toBe('');
  });

  it('Adiciona uma despesa e verifica se a despesa foi salva no estado global', async () => {
    renderWithRouterAndRedux(<Wallet />);
    const value = screen.getByTestId('value-input');
    userEvent.type(value, '11');

    const currency = screen.getByTestId('currency-input');
    userEvent.type(currency, 'USD');

    const method = screen.getByTestId('method-input');
    userEvent.type(method, cartãoCrédito);

    const tag = screen.getByTestId('tag-input');
    userEvent.type(tag, 'Lazer');

    const description = screen.getByTestId('description-input');
    userEvent.type(description, onze);

    const button = screen.getByRole('button');
    userEvent.click(button);

    const valueDespesa = await screen.findByText('11.00');
    expect(valueDespesa).toBeInTheDocument();
    const methodDespesa = await screen.findByText(cartãoCrédito);
    expect(methodDespesa).toBeInTheDocument();
    const tagDespesa = await screen.findByText('Lazer');
    expect(tagDespesa).toBeInTheDocument();
    const descriptionDespesa = await screen.findByText(onze);
    expect(descriptionDespesa).toBeInTheDocument();
  });
});
