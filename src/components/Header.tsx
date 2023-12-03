import { useSelector } from 'react-redux';

type UserType = {
  email: string;
};
function Header() {
  const email = useSelector((state: UserType) => state.email);
  return (
    <div>
      <h1 data-testid="email-field">{ email }</h1>
      <h2 data-testid="total-field">0</h2>
      <h3 data-testid="header-currency-field">BRL</h3>
    </div>
  );
}

export default Header;
