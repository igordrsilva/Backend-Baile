import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './controllers/usuario/usuario.module';
import { ImagemModule } from './controllers/imagem/imagem.module';
import { PrismaService } from './database/PrismaService';

@Module({
  imports: [UsuarioModule, ImagemModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
