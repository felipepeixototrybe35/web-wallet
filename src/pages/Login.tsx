// import { legacy_createStore as createStore } from 'redux';
// import { composeWithDevTools } from '@redux-devtools/extension';
// import reducer from
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import store from '../redux';

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();
  const habEntrar = true;
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate('/carteira');
    store.dispatch({ type: 'EMAIL' });
  };
  return (
    <form onSubmit={ handleSubmit }>
      <input
        value={ email }
        type="email"
        name="email"
        data-testid="email-input"
        id="email"
        placeholder="e-mail"
        onChange={ (event) => setEmail(event.target.value) }
      />
      <input
        value={ senha }
        type="password"
        name="password"
        data-testid="password-input"
        id="password"
        placeholder="Senha"
        onChange={ (event) => setSenha(event.target.value) }
      />
      <button type="submit" disabled={ !habEntrar }>Entrar</button>

    </form>

  );
}

export default Login;
