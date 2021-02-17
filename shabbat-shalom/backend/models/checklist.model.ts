import { model, Schema } from 'mongoose';

export class ChecklistModel {

    owner: number;
    checklistName: string;

    constructor(newOwner: number, newChecklistName: string) {
        this.owner = newOwner;
        this.checklistName = newChecklistName;

    };
}

export const ChecklistSchema = new Schema<ChecklistModel>(
    {
        owner: {
            type: Schema.Types.ObjectId,
            required: true
        },

        checklistName: {
            type: String
        }
      
    });

export const Checklist = model('Checklist', ChecklistSchema);
