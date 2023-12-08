import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { currenciesAPI } from '../redux/actions';

function WalletForm() {
  const dispatch: ThunkDispatch<object, object, AnyAction> = useDispatch();
  const currencies = useSelector((state: any) => state.wallet.currencies);
  useEffect(() => {
    dispatch(currenciesAPI());
  }, []);
  return (
    <form>
      <input
        type="text"
        placeholder="despesa-valor"
        data-testid="value-input"
      />
      <input
        type="text"
        placeholder="despesa-descrição"
        data-testid="description-input"
      />
      <select
        data-testid="currency-input"
      >
        {currencies.map((currency: string, index: string) => (
          <option key={ index }>{currency}</option>
        ))}
      </select>
      <select
        data-testid="method-input"
      >
        <option>Dinheiro</option>
        <option>Cartão de crédito</option>
        <option>Cartão de débito</option>
      </select>
      <select
        data-testid="tag-input"
      >
        <option>Alimentação</option>
        <option>Lazer</option>
        <option>Trabalho</option>
        <option>Transporte</option>
        <option>Saúde</option>
      </select>
    </form>
  );
}

export default WalletForm;
