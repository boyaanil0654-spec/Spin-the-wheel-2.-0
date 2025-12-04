const express = require('express');
const cors = require('cors');
const wheelsRouter = require('./routes/wheels');
const usersRouter = require('./routes/users');
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/wheels', wheelsRouter);
app.use('/api/users', usersRouter);

app.listen(5000, () => console.log('Server running on port 5000'));