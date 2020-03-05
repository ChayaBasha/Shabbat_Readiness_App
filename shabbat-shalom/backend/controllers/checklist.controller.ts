import { ChecklistModel, Checklist } from "../models/checklist.model";
import * as fs from 'fs';

export const defaultCallback = (req: any, res: any) => (
    err: any,
    data: any
  ) => {
    if (err) {
      res.send(err);
    }
    res.json(data);
  };

// CRUD Create, HTTP Post
export const addChecklist = async (req: any, res: any) => {
    try {
        const newChecklist = {
            checklistName: req.body.checklistName,
            tasks: req.body.tasks,
        };
        const checklist = new Checklist(newChecklist);
        
        checklist.save( (error, thisChecklist) => {
            if (error) {
                return console.error(error);
            }
            console.log(req.body.title + " was added to the database!")
        });
        res.status(201).send({checklist});
    } catch (error) {
        res.status(500).send('SERVER_ERROR');
    }
};

// CRUD Read, HTTP Get
export const viewChecklists = async (req: any, res: any) => {
    Checklist.find({}, defaultCallback(req, res));
};

// CRUD Update, HTTP Put

export const updateChecklist = async (req: any, res: any) => {
    const checklistToUpdate = {} as ChecklistModel;
    if (req.body.checklistName) {
        checklistToUpdate['checklistName'] = req.body.title;
    }
    if (req.body.tasks) {
        checklistToUpdate['tasks'] = req.body.ingredients;
    }

    Checklist.findByIdAndUpdate(req.user.title, {
      $set: checklistToUpdate
    }, (error: any, data: any) => {
      if (error) {
        res.status(500).send('UPDATE_FAIL');
      } else {
        res.send(data);
      }
    });
};

export const deleteChecklist = async (checklistName: string) => {

    const checklist = await Checklist.findOneAndDelete({checklistName});
    if (!checklist) {
        throw new Error('404 Recipe not found error');
    }

    // return confirmation?
    // res.status(200).send('Delete successfull');
}
