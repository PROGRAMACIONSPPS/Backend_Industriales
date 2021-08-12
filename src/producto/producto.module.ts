import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Producto } from './entities/producto.entity';
import { ProductoService } from './producto.service';
import { ProductoController } from './producto.controller';
import { SexoModule } from '../sexo/sexo.module';

@Module({
imports: [
    TypeOrmModule.forFeature([
        Producto
    ])
   
],
providers: [ProductoService],
controllers: [ProductoController]
  
})
export class ProductoModule {}

