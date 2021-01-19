import * as express from 'express';
import {
    addChecklist,
    viewChecklists,
    // deleteChecklist,
    // updateChecklist

} from '../controllers/checklist.controller';

export const checklistRoutes = express.Router();

// Add checklist

checklistRoutes.post('/addChecklist', addChecklist);

// View checklist

checklistRoutes.get('/checklist', viewChecklists);

// // Update recipe

// checklistRoutes.put('updateChecklist', updateChecklist )

// // Delete recipe

// checklistRoutes.delete('/view', deleteChecklist);