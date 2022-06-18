import {
  IsEnum, IsNotEmpty, IsOptional, IsString, MaxLength
} from 'class-validator';
import { TaskStatus } from '../tasks/task.model';

export class GetTasksFilterDto {
  @IsOptional()
  @IsEnum(TaskStatus)
    status?: TaskStatus;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  @IsNotEmpty()
    search?: string;
}
