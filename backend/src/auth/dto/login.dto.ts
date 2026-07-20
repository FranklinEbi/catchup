import { IsNotEmpty, IsString,Length } from "class-validator";
export class LoginDto {
  @IsNotEmpty()
  @IsString()
  email!: string;

  @IsNotEmpty()
  @IsString()
  @Length(8,20)
  password!: string;
}