/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class UsuarioService {
  constructor(private prisma: PrismaService) { }

  async create(createUsuarioDto: CreateUsuarioDto) {
    const usuarioExiste = await this.prisma.usuario.findFirst({
      where: {
        email: createUsuarioDto.email
      }
    })

    if (!usuarioExiste) {
      return await this.prisma.usuario.create({
        data: createUsuarioDto
      });
    };

    return usuarioExiste;
  };

  findAll() {
    return this.prisma.usuario.findMany();
  };

  async findOne(id: number) {
    const usuarioExiste = await this.prisma.usuario.findFirst({
      where: {
        id_usuario: id
      }
    });

    if (usuarioExiste) {
      return usuarioExiste;
    };

    return [];
  };

  async update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    const usuarioExiste = await this.prisma.usuario.findFirst({
      where: {
        id_usuario: id
      }
    });

    if (usuarioExiste) {
      return await this.prisma.usuario.update({
        data: updateUsuarioDto,
        where: {
          id_usuario: id
        }
      });
    };

    return { "error": "Usuário inexistente!" }
  };

  async remove(id: number) {
    await this.prisma.usuario.delete({
      where: {
        id_usuario: id
      }
    });

    return { "deleted": "Usuário excluído com sucesso!" };
  }
}
