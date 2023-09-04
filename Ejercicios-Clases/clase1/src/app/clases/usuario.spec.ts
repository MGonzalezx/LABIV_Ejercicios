import { Usuario } from './usuario';

describe('Usuario', () => {
  it('should create an instance', () => {
    expect(new Usuario("Juan","1345")).toBeTruthy();
  });
});
