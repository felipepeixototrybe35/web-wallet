import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './tests/helpers/renderWith';
import App from './App';

describe('Testa a página inicial, Login', () => {
  it('Verifica se existem os inputs de email e password e o botão de Entrar', () => {
    renderWithRouterAndRedux(<App />);
    expect(screen.getByTestId('email-input')).toBeInTheDocument();
    expect(screen.getByTestId('password-input')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Entrar' })).toBeInTheDocument();
  });
  it('Testa a validação do botão a partir dos inputs e o click que leva para a página de despess', async () => {
    renderWithRouterAndRedux(<App />);
    expect(screen.getByRole('button', { name: 'Entrar' })).toBeDisabled();
    await userEvent.type(screen.getByTestId('email-input'), 'teste@email.com');
    expect(screen.getByRole('button', { name: 'Entrar' })).toBeDisabled();
    await userEvent.type(screen.getByTestId('password-input'), '123456');
    expect(screen.getByRole('button', { name: 'Entrar' })).toBeEnabled();
    await userEvent.click(screen.getByRole('button', { name: 'Entrar' }));
    expect(screen.getByText('teste@email.com')).toBeInTheDocument();
  });
});
