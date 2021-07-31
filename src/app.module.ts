import { Module } from '@nestjs/common';
import{ConfigModule, ConfigService} from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DATABASE_HOST, DATABASE_NAME, DATABASE_PASSWORD, DATABASE_USERNAME, DATABASE_PORT } from "./config/constants";
import { AuthModule } from './auth/auth.module';
import { SexoModule } from './sexo/sexo.module';
import { DestinoModule } from './destino/destino.module';
import { ProvinciaModule } from './provincia/provincia.module';
import { MunicipioModule } from './municipio/municipio.module';
import { CiudadModule } from './ciudad/ciudad.module';
import { DepartamentoProvincialModule } from './departamento-provincial/departamento-provincial.module';
import { PassportModule } from '@nestjs/passport';
import { MulterModule } from '@nestjs/platform-express';
import { TallerModule } from './taller/taller.module';
import { DetalleModule } from './detalle/detalle.module';
import { ProductoModule } from './producto/producto.module';



@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'mysql',
        host: config.get<string>(DATABASE_HOST),
       // host: "172.20.0.2",
        port: parseInt(config.get<string>(DATABASE_PORT),10),
        //port: 3306,
        username: config.get<string>(DATABASE_USERNAME),
        password: config.get<string>(DATABASE_PASSWORD),
        database: config.get<string>(DATABASE_NAME),
        entities: [__dirname + "./**/**/*.entity{.ts,.js}"],
        autoLoadEntities: true,
        synchronize: true,
      }) 
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env'
    }),
    UsuarioModule,
    AuthModule,
    SexoModule,
    DestinoModule,
    ProvinciaModule,
    MunicipioModule,
    CiudadModule,
    DepartamentoProvincialModule,
    TallerModule,
    DetalleModule,
    ProductoModule,
  //  MulterModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
