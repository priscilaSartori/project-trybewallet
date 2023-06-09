import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Header.css';
import logoTrybeWallet from '../logoTrybeWallet.png';

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
      <div className="headerTela">
        <img src={ logoTrybeWallet } alt="logo Trybe Wallet" className="imgHeader" />
        <div className="totalDespesa">
          <p className="pHeader">Total de despesas:</p>
          <div data-testid="total-field">
            {expenses.length > 0 ? this.sum() : '0.00'}
          </div>
          <div data-testid="header-currency-field">
            BRL
          </div>
        </div>
        <div data-testid="email-field" className="perfil">
          {/* Email: */}
          {email}
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
