const express = require("express");
const eventController = require('../controllers/EventController');


const router = express.Router()

router.post('/create-event', eventController.createEvent)
router.get('/get-event', eventController.getEvent)
router.get('/get-all-event', eventController.getAllEvent)
router.get('/get-event-id/:id', eventController.getEventById)
router.delete('/delete-event/:id', eventController.deleteEvent)
router.put('/update-event/:id', eventController.updateEvent)
module.exports = router