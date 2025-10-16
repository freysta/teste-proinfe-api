import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { PrismaClient } from '@prisma/client/extension';

@Module({})
export class PrismaModule {
  providers: [PrismaService];
  imports: [PrismaClient];
}
