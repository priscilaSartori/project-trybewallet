import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { emailImput } from '../redux/actions/index';
import './Login.css';
import logo from '../css/logo.png';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    isSaveButtonDisabled: true,
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { email } = this.state;
    const { dispatch, history } = this.props;
    dispatch(emailImput(email));
    history.push('/carteira');
  };

  buttonSave = () => {
    const { email, password } = this.state;
    const minNumber = 6;
    const regex = /^([a-z0-9_\-.]+)@([a-z0-9_\-.]+)\.([a-z]{2,5})$/;
    const emailValido = regex.test(email);
    if (password.length >= minNumber && emailValido) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  };

  onInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value }, () => { this.buttonSave(); });
  };

  render() {
    const { email, password, isSaveButtonDisabled } = this.state;
    return (
      <div className="quadro">
        <form
          onSubmit={ (event) => this.handleSubmit(event) }
        >
          <img src={ logo } alt="logo" className="logo" />
          <label htmlFor="email">
            {/* Email */}
            <input
              data-testid="email-input"
              type="email"
              name="email"
              id="email"
              className="email"
              value={ email }
              onChange={ this.onInputChange }
              placeholder="Email"
            />
          </label>
          <label htmlFor="password">
            {/* Senha */}
            <input
              data-testid="password-input"
              type="password"
              name="password"
              id="password"
              value={ password }
              className="senha"
              onChange={ this.onInputChange }
              placeholder="Senha"
            />
          </label>
          <button
            type="submit"
            disabled={ isSaveButtonDisabled }
            className="entrar"
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect()(Login);
