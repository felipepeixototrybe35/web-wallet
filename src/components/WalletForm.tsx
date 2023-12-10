import { Key, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { currenciesAPI, expensesAPI, saveExepenses } from '../redux/actions';
import { API } from './Api';

const INITIAL_STATE = {
  value: '',
  description: '',
  currency: 'USD',
  method: 'Dinheiro',
  tag: 'Alimentação',
};

function WalletForm() {
  const [form, setForm] = useState(INITIAL_STATE);
  // const { id } = form;
  const [index, setIndex] = useState(0);
  const dispatch1 = useDispatch();
  const dispatch: ThunkDispatch<object, object, AnyAction> = useDispatch();
  const currencies = useSelector((state: any) => state.wallet.currencies);

  useEffect(() => {
    dispatch(currenciesAPI());
  }, [dispatch]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>
  | React.ChangeEvent<HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    const expense = {
      ...form, id: index, exchangeRates: await API(),
    };
    dispatch(saveExepenses(expense));
    setForm(INITIAL_STATE);
    // setForm({ ...form, ...INITIAL_STATE, id: id + 1 });
    // const expenses = { ...form, id: index, exchangeRates: expensesAPI(expenses) };
    // dispatch(saveExepenses(expenses));
    setIndex(index + 1);
  };

  return (
    <form>
      <input
        name="value"
        value={ form.value }
        type="text"
        placeholder="despesa-valor"
        data-testid="value-input"
        onChange={ handleChange }
      />
      <input
        name="description"
        value={ form.description }
        type="text"
        placeholder="despesa-descrição"
        data-testid="description-input"
        onChange={ handleChange }
      />
      <select
        name="currency"
        value={ form.currency }
        data-testid="currency-input"
        onChange={ handleChange }
      >
        {currencies.map((currency: string) => (
          <option key={ index }>{currency}</option>
        ))}
      </select>
      <select
        name="method"
        value={ form.method }
        data-testid="method-input"
        onChange={ handleChange }
      >
        <option value="Dinheiro">Dinheiro</option>
        <option value="Cartão de crédito">Cartão de crédito</option>
        <option value="Cartão de débito">Cartão de débito</option>
      </select>
      <select
        name="tag"
        value={ form.tag }
        data-testid="tag-input"
        onChange={ handleChange }
      >
        <option value="Alimentação">Alimentação</option>
        <option value="Lazer">Lazer</option>
        <option value="Trabalho">Trabalho</option>
        <option value="Transporte">Transporte</option>
        <option value="Saúde">Saúde</option>
      </select>
      <button type="submit" onClick={ handleSubmit }>Adicionar despesa</button>
    </form>
  );
}

export default WalletForm;
