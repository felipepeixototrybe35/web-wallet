import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

type UserType = {
  email: string;
};
function Header() {
  const { email } = useSelector((state: any) => state.user);
  const expenses = useSelector((state: any) => state.wallet.expenses);
  const sumExpenses = expenses.reduce((acc: any, curr: any) => {
    const { value, currency, exchangeRates } = curr;
    const rates = exchangeRates[currency].ask;
    return acc + ((parseFloat(value)) * parseFloat(rates));
  }, 0);
  return (
    <div>
      <h1 data-testid="email-field">{email}</h1>
      <h2 data-testid="total-field">{ sumExpenses.toFixed(2) }</h2>
      <h3 data-testid="header-currency-field">BRL</h3>
    </div>
  );
}

export default Header;
