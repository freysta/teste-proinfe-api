/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAlunoDto } from './dto/create-aluno.dto';

@Injectable()
export class AlunosService {
  constructor(private prisma: PrismaService) {}

  async create(dados: CreateAlunoDto) {
    const { contatos, ...dadosAluno } = dados;
    return await this.prisma.aluno.create({
      data: {
        ...dadosAluno,
        contato: {
          create: contatos,
        },
      },
    });
  }
  async get() {
    return await this.prisma.aluno.findMany({
      include: {
        contato: true,
      },
    });
  }

  async getone(id: number) {
    return await this.findid(id);
  }

  async delete(id: number) {
    await this.findid(id);
    await this.prisma.contato.deleteMany({
      where: { id_fk_aluno: id },
    });

    return this.prisma.aluno.delete({
      where: { id_aluno: id },
    });
  }

  async findid(id: number) {
    const aluno = await this.prisma.aluno.findUnique({
      where: { id_aluno: id },
      include: {
        contato: true,
      },
    });

    if (!aluno) {
      throw new NotFoundException(`Não foi possivel encontrar o id ${id}`);
    }

    return aluno;
  }
}
