const path = require('path');  

const express = require('express');

const contactusController = require('../controllers/contactus');

const router = express.Router();

router.get('/contactus',contactusController.contactusnow);

router.post('/contactus',contactusController.postcontactus);

module.exports = router;