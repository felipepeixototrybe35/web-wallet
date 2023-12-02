// Coloque aqui suas actions
export const EMAIL = 'EMAIL';

export const saveEmail = (email: string) => ({
  type: EMAIL,
  payload: email,
});
