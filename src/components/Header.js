import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  sum = () => {
    const { expenses } = this.props;
    if (expenses !== []) {
      const expensesReduce = expenses.reduce((acc, curr) => {
        const { value, exchangeRates, currency } = curr;
        const ask = exchangeRates[currency]?.ask || '';
        const moeda = ask === undefined ? '0.00' : ask;
        acc += value * moeda;
        return acc;
      }, 0);
      return parseFloat(expensesReduce).toFixed(2);
    } return '0.00';
  };

  render() {
    const { email, expenses } = this.props;
    return (
      <div>
        <div>
          Email:
          <span data-testid="email-field">{email}</span>
        </div>
        <div>
          Despesa total:
          <span data-testid="total-field">
            {expenses.length > 0 ? this.sum() : ' R$ 0.00'}
          </span>
        </div>
        <div data-testid="header-currency-field">
          BRL
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

const mapStateToProps = ({ user, wallet }) => ({
  email: user.email,
  expenses: wallet.expenses,
});

export default connect(mapStateToProps)(Header);
