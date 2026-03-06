const express = require('express');
const router = express.Router();
const enrollmentController = require('../controllers/userController');

//Route to get all users
router.get('/enrollment', enrollmentController.getAllUsers);


//Routes to create
router.post("/enrollment", enrollmentController.createUser);



module.exports = router;
