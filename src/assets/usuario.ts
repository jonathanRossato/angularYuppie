export interface Usuario {
  idUsuario?: number;
  usuario?: string;
  senha?: string;
  email?: string;
  ultimoLogin?: Date;
  autorizado?: boolean;
}
