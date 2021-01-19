import * as express from 'express';
import {
    addTask,
    viewTask
} from '../controllers/task.controller';

export const taskRoutes = express.Router();

taskRoutes.post('/addTask', addTask);
taskRoutes.get('/task', viewTask);