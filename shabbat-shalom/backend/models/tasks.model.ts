import { model, Schema } from 'mongoose';

export class TaskModel {

    checkList_id: number;
    taskName: string;
    taskDuration: number;

    constructor(newCheckList_id: number, newtaskName: string, newTaskDuration: number) {
        this.checkList_id = newCheckList_id;
        this.taskName = newtaskName;
        this.taskDuration = newTaskDuration;
    };
}

export const TaskSchema = new Schema<TaskModel>(
    {
        checkList: {
            type: Schema.Types.ObjectId,
            required: true
        },

        taskName: {
            type:String,
            required: true
        },

        taskDuration: {
            type:Number,
        }
    });
export const Task = model('Task', TaskSchema);