## Profile Counter API
I build a RestFull API that which is counting the number of visiter are visited on Portfolio Website. 
I use Counter(model of database).findOneAndUpdate method to find a parameter("profileCounter" and update the counter from 0 to 1).


## Features
REST API to fetch and update a counter.
MongoDB used to store the counter persistently.
Simple, lightweight, and easy to integrate into any app or portfolio site.

## Tech Stack
Node.js
Express.js
MongoDB with Mongoose
Dotenv for environment variable management
CORS enabled for frontend consumption


### Project Structure ---> 
.
├── controller/
│   └── profileCounterHandler.js
├── routes/
│   └── routes.js
├── Database/
│   ├── database.js
│   └── counter.js
├── .env
├── server.js
└── package.json


# Clone
git clone respository 's https link from visit in my github profile>> repositry >> https copy it
cd press tab

# Create a .env file 
create a .env file with port declaration and mongoDb compass url: (Dummy)
npm i 
npm start 
