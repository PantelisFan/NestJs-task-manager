import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'password',
      database: 'task-management',
      autoLoadEntities: true,
      synchronize: true
    }),
    TasksModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
