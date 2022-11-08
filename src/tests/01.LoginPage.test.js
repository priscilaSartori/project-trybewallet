import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import { screen } from '@testing-library/react';
import React from 'react';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import Login from '../pages/Login';
import App from '../App';
import {
  VALID_EMAIL,
  VALID_PASSWORD,
  INVALID_EMAIL_0,
  INVALID_EMAIL_1,
  INVALID_EMAIL_2,
  INVALID_EMAIL_3,
  INVALID_PASSWORD,
} from '../../cypress/utils/constants';

describe('1 - Crie uma página inicial de login com os seguintes campos e características:', () => {
  it('A rota para esta página deve ser \'/\'', () => {
    const { history } = renderWithRouterAndRedux(<Login />);
    expect(history.location.pathname).toBe('/');
  });

  it('Crie um local para que o usuário insira seu email e senha', () => {
    renderWithRouterAndRedux(<Login />);
    const inputEmail = screen.getByLabelText('Email');
    expect(inputEmail).toBeInTheDocument();
    const inputSenha = screen.getByLabelText('Senha');
    expect(inputSenha).toBeInTheDocument();
  });

  it('Crie um botão com o texto \'Entrar\'', () => {
    renderWithRouterAndRedux(<Login />);
    const button = screen.getByText('Entrar');
    expect(button).toBeInTheDocument();
  });

  it('Realize as seguintes verificações nos campos de email, senha e botão:', () => {
    renderWithRouterAndRedux(<Login />);
    const button = screen.getByText('Entrar');
    expect(button).toBeDisabled();

    const inputEmail = screen.getByLabelText('Email');
    const inputSenha = screen.getByLabelText('Senha');
    userEvent.type(inputEmail, INVALID_EMAIL_0);
    userEvent.type(inputSenha, VALID_PASSWORD);
    expect(button).toBeDisabled();

    userEvent.type(inputEmail, INVALID_EMAIL_1);
    userEvent.type(inputSenha, VALID_PASSWORD);
    expect(button).toBeDisabled();

    userEvent.type(inputEmail, INVALID_EMAIL_2);
    userEvent.type(inputSenha, VALID_PASSWORD);
    expect(button).toBeDisabled();

    userEvent.type(inputEmail, INVALID_EMAIL_3);
    userEvent.type(inputSenha, VALID_PASSWORD);
    expect(button).toBeDisabled();

    userEvent.type(inputEmail, VALID_EMAIL);
    userEvent.type(inputSenha, INVALID_PASSWORD);
    expect(button).toBeDisabled();

    userEvent.type(inputEmail, VALID_EMAIL);
    userEvent.type(inputSenha, VALID_PASSWORD);
    expect(button).toHaveAttribute('disabled', '');
  });

  it('Salve o email no estado da aplicação, com a chave email, assim que o usuário logar.', async () => {
    const { history } = renderWithRouterAndRedux(<App />);
    const inputEmail = screen.getByLabelText('Email');
    const inputSenha = screen.getByLabelText('Senha');
    const button = screen.getByText('Entrar');
    userEvent.type(inputEmail, VALID_EMAIL);
    userEvent.type(inputSenha, VALID_PASSWORD);
    userEvent.click(button);
    act(() => history.push('/carteira'));
    expect(await screen.findByText('alguem@email.com')).toBeInTheDocument();
    expect(history.location.pathname).toBe('/carteira');
  });

  it('A rota deve ser mudada para \'/carteira\' após o clique no botão.', () => {
    const { history } = renderWithRouterAndRedux(<Login />);
    const button = screen.getByText('Entrar');
    userEvent.click(button);
    act(() => history.push('/carteira'));
    expect(history.location.pathname).toBe('/carteira');
  });
});
