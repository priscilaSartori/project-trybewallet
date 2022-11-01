import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { email } = this.props;
    return (
      <div>
        Header
        <div data-testid="email-field">
          Email:
          { email }
        </div>
        <div data-testid="total-field">
          Despesa total gerada pela lista de gastos:
          0
        </div>
        <div data-testid="header-currency-field">
          Câmbio está sendo utilizado:
          BRL
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapStateToProps = ({ user }) => ({
  email: user.email,
});

export default connect(mapStateToProps)(Header);
