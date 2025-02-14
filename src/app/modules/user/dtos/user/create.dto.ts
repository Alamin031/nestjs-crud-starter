import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmptyArray, IsUUIDArray } from '@src/app/decorators';
import { Type } from 'class-transformer';
import {
  ArrayNotEmpty,
  IsArray,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
  MaxLength,
  MinLength,
  ValidateNested,
} from 'class-validator';

export class CreateRoleDTO {
  @ApiProperty({
    type: String,
    required: true,
    example: 'c10ee33d-20a7-4689-8f80-929963400f7d',
  })
  @IsNotEmpty()
  readonly role!: string;
}

export class CreateRolesDTO {
  @ApiProperty({
    type: String,
    required: true,
    example: 'c10ee33d-20a7-4689-8f80-929963400f7d',
  })
  @IsNotEmpty()
  @IsUUID()
  readonly role!: string;
}

export class CreateUserDTO {
  @ApiProperty({
    type: String,
    required: true,
    example: 'Md Al Amin',
  })
  @IsNotEmpty()
  @IsString()
  readonly firstName!: string;

  @ApiProperty({
    type: String,
    required: true,
    example: 'Chowdhury',
  })
  @IsNotEmpty()
  @IsString()
  readonly lastName!: string;

  @ApiProperty({
    type: String,
    required: true,
    example: 'mridoy031@gmail.com',
  })
  @IsNotEmpty()
  @IsEmail()
  readonly email!: string;

  @ApiProperty({
    type: String,
    required: false,
    example: '123456',
  })
  @IsOptional()
  @IsString()
  @MinLength(6)
  @MaxLength(20)
  readonly password!: string;

  @ApiProperty({
    type: [CreateRolesDTO],
    required: false,
    example: [
      {
        role: '1e276fa4-bab1-4bda-bee2-8bc509960467',
      },
      {
        role: 'c10ee33d-20a7-4689-8f80-929963400f7d',
      },
    ],
  })
  @ValidateNested()
  @Type(() => CreateRolesDTO)
  @IsOptional()
  readonly roles!: CreateRolesDTO[];
}


export class CreateUsersDTO {
  @ApiProperty({
    type: String,
    required: true,
    example: 'Md Al Amin',
  })
  @IsNotEmpty()
  @IsString()
  readonly firstName!: string;

  @ApiProperty({
    type: String,
    required: true,
    example: 'Chowdhury',
  })
  @IsNotEmpty()
  @IsString()
  readonly lastName!: string;

  @ApiProperty({
    type: String,
    required: true,
    example: 'mridoy031@gmail.com',
  })
  @IsNotEmpty()
  @IsEmail()
  readonly email!: string;

  @ApiProperty({
    type: String,
    required: false,
    example: '123456',
  })
  @IsOptional()
  @IsString()
  @MinLength(6)
  @MaxLength(20)
  readonly password!: string;

  @ApiProperty({
    type: [CreateRoleDTO],
    required: false,
    example: [{ role: "User" }],
  })
  @ValidateNested()
  @Type(() => CreateRoleDTO)
  @IsOptional()
  readonly roles!: CreateRoleDTO[];
}
