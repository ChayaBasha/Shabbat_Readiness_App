import mongoose = require('mongoose');
import express = require('express');
import bodyParser = require('body-parser');
import cors = require ('cors');
import { databaseName } from './environment';
import { userRoutes } from './routes/user.routes';
import { checklistRoutes } from './routes/checklist.route';
import { taskRoutes } from './routes/task.routes';

const app = express();
const authentication = require('./middleware/auth');

// Set port number to port where database will be listening
const port = process.env.PORT || 3000;

// Connecting to database
mongoose.connect(databaseName, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;

// If there is a connection error with db
db.on('error', console.error.bind(console, 'connection error:'));

// If DB is opened successfully
db.once('open', () => {
  console.log('Connection Successful!');
});

// CORS Middleware
const corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200
}
app.use(cors(corsOptions));
// Body Parser Middleware
app.use(bodyParser.json());
app.use('/checklist/tasks', authentication.auth, taskRoutes);
app.use('/checklist', authentication.auth, checklistRoutes);
app.use('/users', userRoutes);

// Start Server
app.listen(port, () => {
  console.log('Server started and listening on port ' + port);
});
