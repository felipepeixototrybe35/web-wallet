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
        pagamento
      </select>
      <select
        data-testid="tag-input"
      >
        categoria
      </select>
    </form>
  );
}

export default WalletForm;
