import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { saveEmail } from '../redux/actions';

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const habEntrar = regex.test(email) && senha.length > 5;
  const dispatch = useDispatch();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    navigate('/carteira');
    dispatch(saveEmail(email));
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
