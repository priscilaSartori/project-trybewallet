import { screen } from '@testing-library/react';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import Table from '../components/Table';

describe('5 - Desenvolva uma tabela com os gastos contendo as seguintes características:', () => {
  it('A tabela deve possuir um cabeçalho com os campos Descrição, Tag, Método de pagamento, Valor, Moeda, Câmbio utilizado, Valor convertido e Moeda de conversão', () => {
    renderWithRouterAndRedux(<Table />);
    const description = screen.getByText(/Descrição/i);
    expect(description).toBeInTheDocument();

    const tag = screen.getByText(/Tag/i);
    expect(tag).toBeInTheDocument();

    const metodoPagamento = screen.getByText(/Método de pagamento/i);
    expect(metodoPagamento).toBeInTheDocument();

    const valor = screen.getByText('Valor');
    expect(valor).toBeInTheDocument();

    const moeda = screen.getByText('Moeda');
    expect(moeda).toBeInTheDocument();

    const cambio = screen.getByText(/Câmbio utilizado/i);
    expect(cambio).toBeInTheDocument();

    const valorConvertido = screen.getByText(/Valor convertido/i);
    expect(valorConvertido).toBeInTheDocument();

    const moedaConversao = screen.getByText(/Moeda de conversão/i);
    expect(moedaConversao).toBeInTheDocument();
  });
});
