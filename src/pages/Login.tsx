function Login() {
  return (
    <div>
      <input type="email" data-testid="email-input" />
      <input type="password" data-testid="password-input" />
      <button disabled>Entrar</button>

    </div>
  );
}

export default Login;
