import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class ResetPasswordDTO {
  @ApiProperty({
    type: String,
    required: true,
    example: 'mridoy031@gmail.com',
  })
  @IsNotEmpty()
  @IsEmail()
  readonly email!: string;
}
