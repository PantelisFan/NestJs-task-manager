import { IsEnum } from 'class-validator';
import { TaskStatus } from '../tasks/task.model';

export class UpdateTaskStatusDto {
  @IsEnum(TaskStatus)
    status: TaskStatus;
}
