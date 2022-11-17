import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchcurrency, fetchprice, currencyExchange } from '../redux/actions/index';

class WalletForm extends Component {
  state = {
    value: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
    description: '',
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchcurrency());
  }

  stateInicial = () => {
    this.setState({
      value: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      description: '',
    });
  };

  onInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleOnClick = () => {
    const { dispatch } = this.props;
    dispatch(fetchprice({ ...this.state }));
    this.stateInicial();
  };

  handleOnClickEdit = () => {
    const { dispatch, idToEdit } = this.props;
    const { value, description, currency, method, tag } = this.state;
    const newState = {
      id: idToEdit,
      value,
      currency,
      method,
      tag,
      description,
    };
    dispatch(currencyExchange(newState));
    this.stateInicial();
  };

  render() {
    const { value, description, currency, method, tag } = this.state;
    const { currencies, editor } = this.props;
    return (
      <form>
        Valor da despesa:
        <input
          data-testid="value-input"
          type="number"
          name="value"
          id="value-input"
          value={ value }
          onChange={ this.onInputChange }
        />
        Moeda
        <select
          data-testid="currency-input"
          name="currency"
          id="currency-input"
          value={ currency }
          onChange={ this.onInputChange }
        >
          {currencies.map((selectCurrency) => (
            <option
              key={ selectCurrency }
              value={ selectCurrency }
            >
              {selectCurrency}
            </option>
          ))}
        </select>
        Método de pagamento
        <select
          data-testid="method-input"
          name="method"
          id="method-input"
          value={ method }
          onChange={ this.onInputChange }
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
        Tag
        <select
          data-testid="tag-input"
          name="tag"
          id="tag-input"
          value={ tag }
          onChange={ this.onInputChange }
        >
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
        Descrição da despesa:
        <input
          data-testid="description-input"
          type="text"
          name="description"
          id="description-input"
          value={ description }
          onChange={ this.onInputChange }
        />
        {editor ? (
          <button
            type="button"
            onClick={ this.handleOnClickEdit }
          >
            Editar despesa
          </button>)
          : (
            <button
              type="button"
              onClick={ this.handleOnClick }
            >
              Adicionar despesa
            </button>
          )}
      </form>
    );
  }
}

WalletForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  editor: PropTypes.bool.isRequired,
  idToEdit: PropTypes.number.isRequired,
};

const mapStateToProps = ({ wallet }) => ({
  currencies: wallet.currencies,
  editor: wallet.editor,
  expenses: wallet.expenses,
  idToEdit: wallet.idToEdit,
});

export default connect(mapStateToProps)(WalletForm);
