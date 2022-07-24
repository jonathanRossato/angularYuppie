export interface Usuario {
  idUsuario?: number;
  usuario?: string;
  senha?: string;
  nome?: string;
  sobrenome?: string;
  funcao?: string;
  email?: string;
  ultimoLogin?: Date;
  dataCadastro?: Date;
  ativo?: boolean;
}