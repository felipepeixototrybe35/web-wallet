function WalletForm() {
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
        moeda
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
