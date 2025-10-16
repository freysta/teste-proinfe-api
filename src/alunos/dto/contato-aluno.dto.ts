/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsEmail, IsString } from 'class-validator';

export class ContatoDto {
  @IsString()
  telefone: string;

  @IsEmail()
  email: Date;
}
