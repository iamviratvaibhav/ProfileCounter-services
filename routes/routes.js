const express = require('express');
const profileCounterHandler = require('../controller/profileCounterHandler');

const router = express.Router();

router.get('/api/counter', profileCounterHandler); 

module.exports = router;
