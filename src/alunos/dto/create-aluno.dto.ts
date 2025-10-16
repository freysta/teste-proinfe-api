/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Type } from 'class-transformer';
import {
  IsArray,
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsString,
} from 'class-validator';
import { ContatoDto } from './contato-aluno.dto';
import { Nacionalidade, Sexo } from 'generated/prisma';

export class CreateAlunoDto {
  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @IsDateString()
  data_nascimento: Date;

  @IsNotEmpty()
  @IsString()
  cpf: string;

  @IsEnum(['Brasileira', 'Brasileira-naturalizada', 'Estrangeira'])
  nacionalidade: Nacionalidade;

  @IsEnum(['Masculino', 'Feminino'])
  sexo: Sexo;

  @IsNotEmpty()
  @IsArray()
  @Type(() => ContatoDto)
  contatos: ContatoDto[];
}
