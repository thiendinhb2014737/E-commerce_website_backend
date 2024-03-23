const EventService = require('../services/EventService')

const createEvent = async (req, res) => {
    try {
        const { days, hours, minutes, seconds, eventName, discount } = req.body
        if (!days || !hours || !minutes || !seconds || !eventName || !discount) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await EventService.createEvent(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}
const getEvent = async (req, res) => {
    try {
        const { limit, sort } = req.query
        const response = await EventService.getEvent(Number(limit) || null, sort)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}
const getAllEvent = async (req, res) => {
    try {
        const { sort, filter } = req.query
        const response = await EventService.getAllEvent(sort, filter)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}
const getEventById = async (req, res) => {
    try {
        const eventID = req.params.id

        if (!eventID) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The eventID is required'
            })
        }

        const response = await EventService.getEventById(eventID)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}
const deleteEvent = async (req, res) => {
    try {
        const eventID = req.params.id

        if (!eventID) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The eventID is required'
            })
        }

        const response = await EventService.deleteEvent(eventID)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}
const updateEvent = async (req, res) => {
    try {

        const eventID = req.params.id
        const data = req.body
        if (!eventID) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The eventID is required'
            })
        }

        const response = await EventService.updateEvent(eventID, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

module.exports = {
    createEvent,
    getEvent,
    getAllEvent,
    deleteEvent,
    getEventById,
    updateEvent
}