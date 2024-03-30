const ContactService = require('../services/ContactService')

const createContact = async (req, res) => {
    try {
        const { name, email, phone, content } = req.body
        if (!name || !email || !phone || !content) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await ContactService.createContact(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}
const getAllContact = async (req, res) => {
    try {
        const { sort, filter } = req.query
        const response = await ContactService.getAllContact(sort, filter)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deleteContact = async (req, res) => {
    try {
        const contactID = req.params.id

        if (!contactID) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The contactID is required'
            })
        }

        const response = await ContactService.deleteContact(contactID)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}


module.exports = {
    createContact,
    getAllContact,
    deleteContact,
}