import { IsNotEmpty, IsString } from "class-validator";

export class createTaskDto {

    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    @IsString()
    description: string;

}