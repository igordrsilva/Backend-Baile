/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateImagemDto } from './dto/create-imagem.dto';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class ImagemService {
  constructor(private prisma: PrismaService) { }

  async create(createImagemDto: CreateImagemDto) {
    try {
      await this.prisma.usuario.findFirst({
        where: {
          id_usuario: createImagemDto.id_usuario
        }
      })
    } catch {
      return { "error": "Usuário inexistente!" }
    }

    try {
      return await this.prisma.imagem.create({
        data: createImagemDto
      });
    } catch {
      return { "error": "Erro ao salvar a imagem!" }
    };
  };

  findAll() {
    return this.prisma.imagem.findMany();
  };

  async findOne(id: number) {
    const imagemExiste = await this.prisma.imagem.findFirst({
      where: {
        id_imagem: id
      }
    });

    if (imagemExiste) {
      return imagemExiste;
    };

    return [];
  };

  async update(id: number,) {
    const imagemExiste = await this.prisma.imagem.findFirst({
      where: {
        id_imagem: id
      }
    });

    if (imagemExiste) {
      const new_votos = await this.prisma.imagem.update({
        data: {
          total_votos: imagemExiste.total_votos + 1
        },
        where: {
          id_imagem: id
        }
      });

      return {
        id_imagem: new_votos.id_imagem,
        total_votos: new_votos.total_votos
      }
    };

    return { "error": "Imagem inexistente!" }
  }

  async remove(id: number) {
    await this.prisma.imagem.delete({
      where: {
        id_imagem: id
      }
    });

    return { "deleted": "Imagem excluída com sucesso!" };
  }
}
