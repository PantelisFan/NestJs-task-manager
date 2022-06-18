import { IsNotEmpty, IsString } from 'class-validator';

export default class CreateTaskDto {
  @IsNotEmpty()
    title: string;

  @IsNotEmpty()
  @IsString()
    description: string;
}
