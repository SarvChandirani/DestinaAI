import express from 'express';
import travelplanRoute from './routes/travelplan.route';
import userRoute from './routes/users.route';
import cors from 'cors';

import { createClient } from '@supabase/supabase-js'
import config from './config';

// Create a single supabase client for interacting with your database
const supabase = createClient(config.supabaseUrl, config.supabaseApiKey)

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World 2!');
});

app.use('/travelplan', travelplanRoute);
app.use('/users', userRoute);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

// weather app
// database connection


