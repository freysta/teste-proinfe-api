/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsDate, IsDateString, IsNotEmpty, IsString } from 'class-validator';

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

  @IsNotEmpty()
  @IsString()
  sexo: string;
}
