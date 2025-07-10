const routes = require('./routes/routes');             
require('dotenv').config();                                    

const express = require('express');
const cors = require('cors');
const connectDB = require('./Database/database');              

const app = express();
const PORT = process.env.PORT || 5001;

// Connect to MongoDB
connectDB();
// Middleware
app.use(cors());
// Routes
app.use(routes);  
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
