import { useSelector } from 'react-redux';
import { WalletType } from '../types';

function Table() {
  const { expenses } = useSelector((state: WalletType) => state.wallet);
  return (
    <table>
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método de pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio utilizado</th>
          <th>Valor convertido</th>
          <th>Moeda de conversão</th>
          <th>Editar/Excluir</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense: any) => (
          <tr key={ expense.id }>
            <td>{expense.description}</td>
            <td>{expense.tag}</td>
            <td>{expense.method}</td>
            <td>
              {' '}
              {Number(expense.value)
                .toLocaleString('pt-br', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              {' '}
            </td>
            <td>{expense.exchangeRates[expense.currency].name}</td>
            <td>{expense.exchangeRates[expense.currency].ask}</td>
            <td>
              {(expense.value * expense.exchangeRates[expense.currency]
                .ask).toFixed(2)}
            </td>
            <td>Real</td>
            <td>
              <button>Editar</button>
              <button data-testid="delete-btn">Excluir</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
