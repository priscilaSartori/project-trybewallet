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
      <div className="fundo">
        {/* <img src="https://drive.google.com/uc?export=view&id=13lc3sXLQz9u3_zVsgotqC23qKxpNC-LD" width="100%" height="100%" /> */}
        <Header />
        <WalletForm />
        <Tablet />
      </div>
    );
  }
}

export default connect()(Wallet);
