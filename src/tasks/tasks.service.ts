import { Injectable, NotFoundException } from '@nestjs/common';
import { createTaskDto } from 'src/interfaces/create-task.dto';
import { GetTasksFilterDto } from 'src/interfaces/get-tasks-filter-dto';
import { v4 as uuid} from 'uuid';
import { Task, TaskStatus } from './task.model';

@Injectable()
export class TasksService {

    private tasks: Task[] = [];


    getAllTasks() {
        return this.tasks;
    }


    createTask(createTaskDto: createTaskDto) {

        const {title, description} = createTaskDto; 
        
        const task: Task = {
            id: uuid(),
            title,
            description,
            status: TaskStatus.OPEN
        };

        this.tasks.push(task);

        return `wTask with id: ${task.id} created, ${this.tasks.length} tasks are now in queue.`;

    }


    deleteAllTasks() {
        this.tasks = [];

        return `Tasks in queue: ${this.tasks.length}`;
    }


    getTaskById(id: string): Task {

        let askedTask = this.tasks.find( task => task.id === id)

        if (askedTask) return askedTask;

        throw new NotFoundException(`Task with ID ${id} not funound`);
        
    }

    deleteTaskById(id: string): Task | string {

        let deletedId = this.getTaskById(id);

        this.tasks =  this.tasks.filter((task) => {task.id !== id});

        return deletedId;

    }

    updateTask(id: string, status: TaskStatus) {
        const task = this.getTaskById(id);
        task.status = status;
        return task;
      }

    getTasksWithFilters(filterDto: GetTasksFilterDto): Task[] {
        
        const { status, search } = filterDto;
        let tasks = this.getAllTasks();
    
        if (status) {
          tasks = tasks.filter(task => task.status === status);
        }
    
        if (search) {
            tasks = tasks.filter(task =>
            task.title.includes(search) ||
            task.description.toLocaleLowerCase().includes(search.toLocaleLowerCase()),
          );
        }
    
        return tasks;
      }

}
