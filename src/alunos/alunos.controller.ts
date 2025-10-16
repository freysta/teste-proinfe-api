import { Body, Controller, Post } from '@nestjs/common';
import { AlunosService } from './alunos.service';
import { CreateAlunoDto } from './dto/create-aluno.dto';

@Controller('alunos')
export class AlunosController {
  constructor(private readonly aluno: AlunosService) {}

  @Post('')
  async createaluno(
    @Body() { cpf, data_nascimento, nome, sexo }: CreateAlunoDto,
  ) {
    return this.aluno.create({
      cpf,
      data_nascimento,
      nome,
      sexo,
    });
  }
}
