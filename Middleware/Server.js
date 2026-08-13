const express = require('express');
const app = express();

// custom logger middleware 
const requestLogger = (req, res, next) => {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${req.method} ${req.url}`);
    next();  
};

app.use(requestLogger);

// custom X-Powered-By header middleware 
const addCustomHeader = (req, res, next) => {
    res.setHeader('X-Powered-By', 'NodeJS-Cohort');
    next();
};
app.use(addCustomHeader);

// helper middleware function to validate the ID
const validateUserId = (req, res, next) => {
  const userId = req.params.id;
  
  // Check if the id is numeric
  if (isNaN(userId)) {
    return res.status(400).json({ error: 'Invalid ID. ID must be a number.' });
  }
  
  next(); 
};

app.get('/users/:id', validateUserId, (req, res) => {
  res.json({ message: `Success! User ID is ${req.params.id}` });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});