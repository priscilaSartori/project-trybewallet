import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { btnDelete, btnEdit } from '../redux/actions/index';
import './Table.css';
import editar from '../css/editar.png';
import iconexcluir from '../css/iconexcluir.png';

class Table extends Component {
  onButtonClick = async ({ target }) => {
    const { dispatch, expenses } = this.props;
    const excluir = expenses.filter((expense) => expense.id !== Number(target.id));
    dispatch(btnDelete(excluir));
  };

  onButtonClickEdit = async ({ target }) => {
    const { dispatch } = this.props;
    dispatch(btnEdit(Number(target.id)));
  };

  render() {
    const { expenses } = this.props;
    return (
      <div className="boxAzul">
        <table className="table">
          <thead>
            <tr className="tableThead">
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
          </thead>
          <tbody className="tableTbody">
            {expenses.map((expense) => (
              <tr key={ expense.id }>
                <td>{expense.description}</td>
                <td>{expense.tag}</td>
                <td>{expense.method}</td>
                <td>{parseFloat(expense.value).toFixed(2)}</td>
                <td>{expense.exchangeRates[expense.currency].name}</td>
                <td>
                  {parseFloat(expense.exchangeRates[expense.currency].ask)
                    .toFixed(2)}
                </td>
                <td>
                  {parseFloat(expense.value * expense.exchangeRates[expense.currency].ask)
                    .toFixed(2)}
                </td>
                <td>Real</td>
                <td>
                  <button
                    data-testid="edit-btn"
                    type="button"
                    onClick={ this.onButtonClickEdit }
                    id={ expense.id }
                    className="img"
                  >
                    <img src={ editar } alt="editar" />
                  </button>
                  <button
                    data-testid="delete-btn"
                    type="button"
                    onClick={ this.onButtonClick }
                    id={ expense.id }
                    className="img"
                  >
                    <img src={ iconexcluir } alt="excluir" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.shape).isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = ({ wallet }) => ({
  expenses: wallet.expenses,
});

export default connect(mapStateToProps)(Table);
