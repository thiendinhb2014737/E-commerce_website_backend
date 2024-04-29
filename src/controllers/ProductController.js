const ProductService = require('../services/ProductService')


const createProduct = async (req, res) => {
    console.log('req.body', req.body.rating)
    try {
        const {
            name, image, type, price,
            sizeS, sizeM, sizeL, sizeXL, countS, countM, countL, countXL,
            colorBe, colorWhite, colorBlack, colorBlue,
            countColorBeS, countColorWhiteS, countColorBlackS, countColorBlueS,
            countColorBeM, countColorWhiteM, countColorBlackM, countColorBlueM,
            countColorBeL, countColorWhiteL, countColorBlackL, countColorBlueL,
            countColorBeXL, countColorWhiteXL, countColorBlackXL, countColorBlueXL,
            gender,
            countInStock, rating, description, discount
        } = req.body

        if (
            !name || !image || !type || !price
            || !sizeS || !sizeM || !sizeL || !sizeXL || !countS || !countM || !countL || !countXL
            || !colorBe || !colorWhite || !colorBlack || !colorBlue
            || !countColorBeS || !countColorWhiteS || !countColorBlackS || !countColorBlueS
            || !countColorBeM || !countColorWhiteM || !countColorBlackM || !countColorBlueM
            || !countColorBeL || !countColorWhiteL || !countColorBlackL || !countColorBlueL
            || !countColorBeXL || !countColorWhiteXL || !countColorBlackXL || !countColorBlueXL
            || !gender
            || !countInStock || !discount) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await ProductService.createProduct(req.body)

        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const updateProduct = async (req, res) => {
    console.log('req.body', req.body)
    try {

        const productId = req.params.id
        const data = req.body
        if (!productId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The productId is required'
            })
        }

        const response = await ProductService.updateProduct(productId, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deleteProduct = async (req, res) => {
    try {
        const productId = req.params.id

        if (!productId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The productId is required'
            })
        }

        const response = await ProductService.deleteProduct(productId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deleteMany = async (req, res) => {
    try {
        const ids = req.body.ids

        if (!ids) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The ids is required'
            })
        }

        const response = await ProductService.deleteManyProduct(ids)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllProduct = async (req, res) => {
    try {
        const { limit, page, sort, filter } = req.query
        const response = await ProductService.getAllProduct(Number(limit) || null, Number(page) || 0, sort, filter)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getDetailsProduct = async (req, res) => {
    try {
        const productId = req.params.id

        if (!productId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The productId is required'
            })
        }

        const response = await ProductService.getDetailsProduct(productId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}
const getAllType = async (req, res) => {
    try {

        const response = await ProductService.getAllType()
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}
const getAllPrice = async (req, res) => {
    try {

        const response = await ProductService.getAllPrice()
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}
const evaluate = async (req, res) => {
    try {

        const productId = req.params.id
        const data = req.body
        if (!productId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The productId is required'
            })
        }

        const response = await ProductService.evaluate(productId, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}


module.exports = {
    createProduct,
    updateProduct,
    deleteProduct,
    getDetailsProduct,
    getAllProduct,
    deleteMany,
    getAllType,
    getAllPrice,
    evaluate
}