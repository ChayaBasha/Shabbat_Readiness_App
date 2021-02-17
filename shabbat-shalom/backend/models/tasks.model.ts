import { model, Schema } from 'mongoose';

export class TaskModel {

    checkListId: number;
    taskName: string;
    taskDuration: number;

    constructor(newCheckList_id: number, newtaskName: string, newTaskDuration: number) {
        this.checkListId = newCheckList_id;
        this.taskName = newtaskName;
        this.taskDuration = newTaskDuration;
    };
}

export const TaskSchema = new Schema<TaskModel>(
    {
        checkListId: {
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