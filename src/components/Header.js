import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Header.css';
import logo from '../css/logo.png';
import Moedas from '../css/Moedas.png';
import profile from '../css/profile.png';

class Header extends Component {
  sum = () => {
    const { expenses } = this.props;
    if (expenses.length > 0) {
      const expensesReduce = expenses.reduce((acc, curr) => {
        const { value, exchangeRates, currency } = curr;
        const { ask } = exchangeRates[currency];
        acc += value * ask;
        return acc;
      }, 0);
      return parseFloat(expensesReduce).toFixed(2);
    }
  };

  render() {
    const { email, expenses } = this.props;
    return (
      <div className="boxBranco">
        <img src={ logo } alt="logo" className="logoHeader" />
        <div data-testid="email-field" className="emailHeader">
          <img src={ profile } alt="profile" />
          Email:
          {email}
        </div>
        <div data-testid="total-field" className="moedas">
          <img src={ Moedas } alt="moedas" />
          Total de despesas:
          {expenses.length > 0 ? this.sum() : ' 0.00'}
          <div data-testid="header-currency-field">
            BRL
          </div>
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
