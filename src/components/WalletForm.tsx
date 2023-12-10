import { Key, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { currenciesAPI, expensesAPI, saveExepenses } from '../redux/actions';

const INITIAL_STATE = {
  id: 0,
  value: '',
  description: '',
  currency: 'USD',
  method: 'Dinheiro',
  tag: 'Alimentação',
  exchangeRates: {},
};

function WalletForm() {
  const [form, setForm] = useState(INITIAL_STATE);
  const { id } = form;
  // const [index, setIndex] = useState(0);

  const dispatch: ThunkDispatch<object, object, AnyAction> = useDispatch();
  const expenses = useSelector((state: any) => state.wallet.expenses);
  const currencies = useSelector((state: any) => state.wallet.currencies);
  useEffect(() => {
    dispatch(currenciesAPI());
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>
  | React.ChangeEvent<HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(expensesAPI(expenses));
    setForm({ ...INITIAL_STATE, id: id + 1 });
    // const expenses = { ...form, id: index, exchangeRates: expensesAPI(expenses) };
    // dispatch(saveExepenses(expenses));
    // setIndex(index + 1);
  };

  return (
    <form>
      <input
        value={ form.value }
        type="text"
        placeholder="despesa-valor"
        data-testid="value-input"
        onChange={ handleChange }
      />
      <input
        value={ form.description }
        type="text"
        placeholder="despesa-descrição"
        data-testid="description-input"
        onChange={ handleChange }
      />
      <select
        value={ form.currency }
        data-testid="currency-input"
        onChange={ handleChange }
      >
        {currencies.map((currency: string, index: number) => (
          <option key={ index }>{currency}</option>
        ))}
      </select>
      <select
        value={ form.method }
        data-testid="method-input"
        onChange={ handleChange }
      >
        <option>Dinheiro</option>
        <option>Cartão de crédito</option>
        <option>Cartão de débito</option>
      </select>
      <select
        value={ form.tag }
        data-testid="tag-input"
        onChange={ handleChange }
      >
        <option>Alimentação</option>
        <option>Lazer</option>
        <option>Trabalho</option>
        <option>Transporte</option>
        <option>Saúde</option>
      </select>
      <button type="submit" onClick={ handleSubmit }>Adicionar despesa</button>
    </form>
  );
}

export default WalletForm;
