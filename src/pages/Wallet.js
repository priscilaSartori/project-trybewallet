/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import WalletForm from '../components/WalletForm';
import Tablet from '../components/Table';
import './Wallet.css';

class Wallet extends React.Component {
  render() {
    return (
      <div className="fundoWallet">
        <Header />
        <WalletForm />
        <Tablet />
      </div>
    );
  }
}

export default connect()(Wallet);
