import { IsEmpty, IsString,Length } from "class-validator";
export class LoginDto {
  @IsEmpty()
  @IsString()
  email!: string;

  @IsEmpty()
  @IsString()
  @Length(8,20)
  password!: string;
}