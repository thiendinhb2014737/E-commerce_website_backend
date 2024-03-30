const express = require("express");
const ContactController = require('../controllers/ContactController');


const router = express.Router()

router.post('/create-contact', ContactController.createContact)
router.get('/get-all-contact', ContactController.getAllContact)
router.delete('/delete-contact/:id', ContactController.deleteContact)

module.exports = router