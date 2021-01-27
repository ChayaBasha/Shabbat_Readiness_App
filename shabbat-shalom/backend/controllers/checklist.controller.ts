import { ChecklistModel, Checklist } from "../models/checklist.model";
import * as fs from 'fs';
import { RequestHandler } from "express";

export const defaultCallback = (req: any, res: any) => (
  err: any,
  data: any
) => {
  if (err) {
    console.error(err);
    res.send(err);
  }
  res.json(data);
};

// CRUD Create, HTTP Post
export const addChecklist: RequestHandler = async (req: any, res: any) => {
  try {
    const newChecklist = {
      owner: req.body.owner,
      checklistName: req.body.checklistName,
    };

    console.log(JSON.stringify(newChecklist));

    console.log(req.body);

    const checklist = new Checklist(newChecklist);


    checklist.save((error, thisChecklist) => {
      if (error) {
        return console.error(error);
      }
      console.log(req.body.checklistName + " was added to the database!")
    });

    res.status(201).send({ checklist });
  } catch (error) {
    console.error(error);
    res.status(500).send('SERVER_ERROR');
  }
};

// CRUD Read, HTTP Get
export const viewChecklists = async (req: any, res: any) => {
  Checklist.find({ owner: req.params.owner}, defaultCallback(req, res));
};

// CRUD Update, HTTP Put

// export const updateChecklist = async (req: any, res: any) => {
//     const checklistToUpdate = {} as ChecklistModel;
//     if (req.body.checklistName) {
//         checklistToUpdate['checklistName'] = req.checklistName;
//     }

//     }

//     Checklist.findByIdAndUpdate(req.user.checklistName, {
//       $set: checklistToUpdate
//     }, (error: any, data: any) => {
//       if (error) {
//         res.status(500).send('UPDATE_FAIL');
//       } else {
//         res.send(data);
//       }
//     });
// };

// export const deleteChecklist = async (checklistName: string) => {

//     const checklist = await Checklist.findOneAndDelete({checklistName});
//     if (!checklist) {
//         throw new Error('404 Recipe not found error');
//     }

//     // return confirmation?
//     // res.status(200).send('Delete successfull');
// }
