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
  @IsEnum(['Masculino', 'Feminino'])
  sexo: string;
  @IsEnum(['Brasileira', 'Brasileira-naturalizada', 'Estrangeira'])
  nacionalidaded: string;

  @IsNotEmpty()
  @IsArray()
  @Type(() => ContatoDto)
  contatos: ContatoDto[];
}
