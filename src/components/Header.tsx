import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

type UserType = {
  email: string;
};
function Header() {
  const { email } = useSelector((state: any) => state.user);
  const anyExpenses = useSelector((state: any) => state.wallet.expenses);
  const sumExpenses = anyExpenses.reduce((acc: any, expenses: any) => {
    const expensesAsk = expenses.exchangeRates?.[expenses.currency]?.ask;
    return acc + Number(expenses.value) * Number(expensesAsk);
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
