import {model, Schema} from 'mongoose';
import { TaskModel } from './tasks.model';

export class ChecklistModel {

    checklistName: string;
    tasks: TaskModel[];

    constructor(newChecklistName: string, newTasks: TaskModel[]) {
        this.checklistName = newChecklistName;
        this.tasks = newTasks;
    };
}

export const ChecklistSchema = new Schema<ChecklistModel>(
    {
    checklistName: {
        type: String
    },
    tasks: {
        type: [{taskName: String, duration: Number }]
    },
});

export const Checklist = model('Checklist', ChecklistSchema);
