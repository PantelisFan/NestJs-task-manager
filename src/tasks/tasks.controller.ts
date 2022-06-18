import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.model';
import { createTaskDto } from 'src/interfaces/create-task.dto';
import { GetTasksFilterDto } from 'src/interfaces/get-tasks-filter-dto';
import { UpdateTaskStatusDto } from 'src/interfaces/update-task-status.dto';

@Controller('tasks')
export class TasksController {

    constructor(private tasksService: TasksService) {};

    @Get()
    getlTasks(@Body() tasksFilterDto?: GetTasksFilterDto): Task[] {

        if (!tasksFilterDto) {
            return this.tasksService.getAllTasks();
        }

        return this.tasksService.getTasksWithFilters(tasksFilterDto);

    };

    @Get(':id')
    getTaskById(@Param('id') id: string): Task | string {
        return this.tasksService.getTaskById(id);

    }


    @Post()
    createTask( 
        @Body() createTaskDto: createTaskDto
        ): string {

        return this.tasksService.createTask(createTaskDto);

    };


    @Delete()
    deleteTasks() {
        return this.tasksService.deleteAllTasks();
    };

    @Delete(':id')
    deleteTaskById(@Param('id') id) {
        return this.tasksService.deleteTaskById(id);
    }

    @Patch('/:id/status')
    updateTaskStatus(
      @Param('id') id: string,
      @Body() updateTaskStatusDto: UpdateTaskStatusDto,
    ): Task {
      const { status } = updateTaskStatusDto;
      return this.tasksService.updateTask(id, status);
    }

 }
