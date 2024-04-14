/* eslint-disable prettier/prettier */
export class CreateUsuarioDto {
    id_usuario: number;
    nome_usuario?: string;
    email: string;
    paroquia_capela?: string;
    votou?: boolean;
}