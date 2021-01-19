import { TaskModel, Task} from "../models/tasks.model";
import * as fs from 'fs';
import {RequestHandler} from 'express';
import { defaultCallback } from "./checklist.controller";

export const addTask: RequestHandler = async (req: any, res: any) => {
    try {
        const newTask = {
            checkList_id: req.body.checkList.id,
            taskName: req.body.taskName,
            taskDuration: req.body.taskDuration
        };

        console.log(JSON.stringify(newTask));
        console.log(req.body);

        const task =new Task(newTask);

        task.save( (error, thisTask) => {
            if(error) {
                return console.log(error);
            }
        });
res.status(201).send({task});
} catch (error) {
    res.status(500).send('SERVER_ERROR');
}
};

export const viewTask = async (req: any, res:any) => {
Task.findOne({checkList_id: req.body.checkList._id}, defaultCallback(req, res));
};