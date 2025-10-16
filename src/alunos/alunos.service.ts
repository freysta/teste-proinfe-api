/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Body, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAlunoDto } from './dto/create-aluno.dto';

@Injectable()
export class AlunosService {
  constructor(private prisma: PrismaService) {}

  async create(@Body() { cpf, data_nascimento, nome, sexo }: CreateAlunoDto) {
    await this.prisma.aluno.create({
      data: { data_nascimento, sexo, cpf, nome },
    });
  }
  async get() {
    await this.prisma.aluno.findMany({});
  }
  async getone(id: number) {
    return await this.findid(id);
  }

  async findid(id: number) {
    if (
      !(await this.prisma.aluno.findUnique({
        where: { id_aluno: id },
      }))
    ) {
      throw new NotFoundException(`Não foi possivel encontrar o id ${id}`);
    }
  }
}
