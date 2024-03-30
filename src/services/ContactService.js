const Contact = require("../models/ContactModel")

const createContact = (newContact) => {

    return new Promise(async (resolve, reject) => {
        const { name, email, phone, content } = newContact
        try {
            const createdContact = await Contact.create({
                name,
                email,
                phone,
                content
            })
            if (createdContact) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS!',
                    data: createdContact
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}
const getAllContact = (sort, filter) => {
    //console.log('filter', filter)
    return new Promise(async (resolve, reject) => {
        try {
            if (filter) {
                const label = filter[0]
                const allContact = await Contact.find({ [label]: { '$regex': filter[1] } })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allContact,
                })
            }
            if (sort) {
                const objectSort = {}
                objectSort[sort[1]] = sort[0]
                const allContact = await Contact.find().sort(objectSort)
                resolve({
                    status: 'OK',
                    message: 'Get all Contact seccess!',
                    data: allContact,
                })
            }
            else {
                const allContact = await User.find()
                resolve({
                    status: 'OK',
                    message: 'Get all Contact seccess!',
                    data: allContact
                })

            }


        } catch (e) {
            reject(e)
        }
    })
}


const deleteContact = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            // Check email có tồn tại trong database không
            const checkContact = await Contact.findOne({
                _id: id
            })
            if (checkContact === null) {
                resolve({
                    status: 'OK',
                    message: 'The Contact is not defined!',
                })
            }
            await Contact.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete Contact seccess!'
            })
        } catch (e) {
            reject(e)
        }
    })
}

module.exports = {
    createContact,
    getAllContact,
    deleteContact,
}