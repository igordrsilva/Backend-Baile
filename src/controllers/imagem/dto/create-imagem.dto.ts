/* eslint-disable prettier/prettier */
export class CreateImagemDto {
    id_imagem: number;
    upload_imagem: string;
    descricao_imagem?: string;
    total_votos?: number;
    id_usuario: number;
}
