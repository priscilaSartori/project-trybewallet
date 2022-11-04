import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  sum = () => {
    const { expenses } = this.props;
    // console.log(expenses);
    expenses.map((expense) => console.log(expense.exchangeRates[expense.currency]));
    // if (expenses.length > 1) {
    //   const expensesReduce = expenses.reduce((acc, curr) => {
    //     const { value, exchangeRates, currency } = curr;
    //     exchangeRates[currency].ask === undefined ? moeda = '0.00' : moeda = ask;
    //     acc += value * moeda;
    //     return acc;
    //   }, 0);
    //   return parseFloat(expensesReduce).toFixed(2);
    // }
  };

  render() {
    const { email, expenses } = this.props;
    // if (!expenses) {
    //   return;
    // }

    expenses?.map((expense) => console.log(expense.exchangeRates[expense.currency]?.ask));
    return (
      <div>
        <div data-testid="email-field">
          Email:
          { email }
        </div>
        <div data-testid="total-field">
          {/* {expenses.length > 1 ? this.sum() : '0.00' } */}
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
  // expenses: PropTypes.arrayOf(PropTypes.shape).isRequired,
  // expenses: PropTypes.arrayOf(PropTypes.shape),
};
// Header.defaultProps = {
//   expenses: [],
// };

const mapStateToProps = ({ user, wallet }) => ({
  email: user.email,
  expenses: wallet.expenses,
});

export default connect(mapStateToProps)(Header);
