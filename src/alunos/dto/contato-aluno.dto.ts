/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class ContatoDto {
  @IsString()
  telefone: string;

  @IsEmail()
  @IsNotEmpty()
  email: Date;
}
