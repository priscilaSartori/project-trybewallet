import React, { Component } from 'react';

class WalletForm extends Component {
  componentDidMount() {
    this.fetchItem();
  }

  fetchItem = async () => {
    const baseUrl = 'https://economia.awesomeapi.com.br/json/all';
    const result = await fetch(baseUrl)
      .then((response) => response.json())
      .then((dados) => dados)
      .catch((error) => error);
    return result;
  };

  xxxxxxxxx = async () => {
    const favorites = await fetchItem() || '[]';
    this.setState({
      currencies: favorites,
    });
  };

  render() {
    return (
      <div>
        WalletForm
        <div data-testid="value-input">
          valor da despesa:
          0
        </div>
        <div data-testid="description-input">
          Descrição da despesa:
          ccccccccc
        </div>
        <select
          data-testid="currency-input"
          name=""
          id=""
        />
        <select
          data-testid="method-input"
          name=""
          id=""
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
        <select
          data-testid="tag-input"
          name=""
          id=""
        >
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </div>
    );
  }
}

export default WalletForm;
