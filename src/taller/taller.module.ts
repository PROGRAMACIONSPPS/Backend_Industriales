import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TallerEntity } from './entities/taller.entity';
import { TallerService } from './taller.service';
import { TallerController } from './taller.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            TallerEntity
        ])
    ],
    providers: [TallerService],
    controllers: [TallerController]
})
export class TallerModule {}
