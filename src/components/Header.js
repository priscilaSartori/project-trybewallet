import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  sum = () => {
    const { expenses } = this.props;
    if (expenses.length > 0) {
      console.log('entrei');
      const expensesReduce = expenses.reduce((acc, curr) => {
        const { value, exchangeRates, currency } = curr;
        const ask = exchangeRates[currency]?.ask;
        acc += value * ask;
        return acc;
      }, 0);
      return parseFloat(expensesReduce).toFixed(2);
    }
  };

  render() {
    const { email, expenses } = this.props;
    return (
      <div>
        <div data-testid="email-field">
          Email:
          {email}
        </div>
        <div data-testid="total-field">
          {expenses.length > 0 ? this.sum() : '0.00'}
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
