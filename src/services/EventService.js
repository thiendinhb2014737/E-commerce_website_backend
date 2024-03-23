const Event = require("../models/EventModel")

const createEvent = (newEvent) => {
    return new Promise(async (resolve, reject) => {
        const { days, hours, minutes, seconds, eventName, discount } = newEvent

        try {
            const createdEvent = await Event.create({
                eventName,
                days,
                hours,
                minutes,
                seconds,
                discount
            })
            if (createdEvent) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS!',
                    data: createdEvent
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}
const getEvent = (limit, sort) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (sort && limit) {
                const objectSort = {}
                objectSort[sort[1]] = sort[0]
                const eventSort = await Event.find().limit(limit).sort(objectSort).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: eventSort,
                })
            }

        } catch (e) {
            reject(e)
        }
    })
}
const getAllEvent = (sort, filter) => {
    //console.log('filter', filter)
    return new Promise(async (resolve, reject) => {
        try {
            if (filter) {
                const label = filter[0]
                const allEvent = await Event.find({ [label]: { '$regex': filter[1] } })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allEvent,
                })
            }
            if (sort) {
                const objectSort = {}
                objectSort[sort[1]] = sort[0]
                const allEvent = await Event.find().sort(objectSort)
                resolve({
                    status: 'OK',
                    message: 'Get all event seccess!',
                    data: allEvent,
                })
            }
            else {
                const allEvent = await User.find()
                resolve({
                    status: 'OK',
                    message: 'Get all event seccess!',
                    data: allEvent
                })

            }


        } catch (e) {
            reject(e)
        }
    })
}
const getEventById = (id) => {
    return new Promise(async (resolve, reject) => {

        try {
            // Check email có tồn tại trong database không
            const event = await Event.findOne({
                _id: id
            })

            if (event === null) {
                resolve({
                    status: 'OK',
                    message: 'The event is not defined!',
                })
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS!',
                data: event
            })


        } catch (e) {
            reject(e)
        }
    })
}
const deleteEvent = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            // Check email có tồn tại trong database không
            const checkEvent = await Event.findOne({
                _id: id
            })
            if (checkEvent === null) {
                resolve({
                    status: 'OK',
                    message: 'The event is not defined!',
                })
            }
            await Event.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete event seccess!'
            })
        } catch (e) {
            reject(e)
        }
    })
}
const updateEvent = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkEvent = await Event.findOne({
                _id: id
            })
            if (checkEvent === null) {
                resolve({
                    status: 'OK',
                    message: 'The user is not defined!',
                })
            }

            const updatedEvent = await Event.findByIdAndUpdate(id, data, { new: true })

            resolve({
                status: 'OK',
                message: 'SUCCESS!',
                data: updatedEvent
            })


        } catch (e) {
            reject(e)
        }
    })
}
module.exports = {
    createEvent,
    getEvent,
    getAllEvent,
    deleteEvent,
    getEventById,
    updateEvent
}