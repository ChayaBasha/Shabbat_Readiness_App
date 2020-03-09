import {model, Schema} from 'mongoose';
import { ChecklistModel } from './checklist.model';

export interface UserModel {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  tokens: [];
  checklists: ChecklistModel[];
}

// User Schema
export const UserSchema = new Schema<UserModel>({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minLength: 6
  },
  tokens: [{
    token: {
      type: String,
      required: true
    }
  }],

  // checklists: [{
  //   type: 
  //   {checklistName: String,
  //    tasks: {
  //     type: [{taskName: String, duration: Number }]
  // }
  //   }
  // }]

});

export const User = model('User', UserSchema);