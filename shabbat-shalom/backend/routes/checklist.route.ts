import * as express from 'express';
import {
    addChecklist,
    viewAllChecklists,
    viewChecklist,
    // deleteChecklist,
    // updateChecklist

} from '../controllers/checklist.controller';

export const checklistRoutes = express.Router();

// Add checklist

checklistRoutes.post('/addChecklist', addChecklist);

// View checklists

checklistRoutes.get(`/userChecklist/:owner`, viewAllChecklists);
checklistRoutes.get(`/userChecklist/:owner/:checklistId`,viewChecklist)

// // Update recipe

// checklistRoutes.put('updateChecklist', updateChecklist )

// // Delete recipe

// checklistRoutes.delete('/view', deleteChecklist);