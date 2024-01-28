const Product = require("../models/ProductModel")


const createProduct = (newProduct) => {
    return new Promise(async (resolve, reject) => {
        const { name, image, type, price, size, countInStock, rating, description, discount } = newProduct

        try {
            // Check email
            const checkProduct = await Product.findOne({
                name: name
            })
            if (checkProduct !== null) {
                resolve({
                    status: 'OK',
                    message: 'The name of product is already!',
                })
            }

            //Khi test phone: 0123456789 bị lỗi??
            const newProduct = await Product.create({
                name,
                image,
                type,
                price,
                size,
                countInStock: Number(countInStock),
                rating,
                description,
                discount: Number(discount)
            })
            if (newProduct) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS!',
                    data: newProduct
                })
            }

        } catch (e) {
            reject(e)
        }
    })
}

const updateProduct = (id, data) => {
    return new Promise(async (resolve, reject) => {

        try {
            // Check email có tồn tại trong database không
            const checkProduct = await Product.findOne({
                _id: id
            })
            //console.log('checkUser', checkUser)
            if (checkProduct === null) {
                resolve({
                    status: 'OK',
                    message: 'The product is not defined!',
                })
            }

            const updatedProduct = await Product.findByIdAndUpdate(id, data, { new: true })

            resolve({
                status: 'OK',
                message: 'SUCCESS!',
                data: updatedProduct
            })


        } catch (e) {
            reject(e)
        }
    })
}

const deleteProduct = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            // Check email có tồn tại trong database không
            const checkProduct = await Product.findOne({
                _id: id
            })
            if (checkProduct === null) {
                resolve({
                    status: 'OK',
                    message: 'The product is not defined!',
                })
            }
            await Product.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete product seccess!'
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteManyProduct = (ids) => {
    return new Promise(async (resolve, reject) => {
        try {

            await Product.deleteMany({ _id: ids })
            resolve({
                status: 'OK',
                message: 'Delete product seccess!'
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllProduct = (limit, page, sort, filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            const totalProduct = await Product.countDocuments()
            let allProduct = []
            if (filter) {
                const label = filter[0]
                const allObjectFilter = await Product.find({ [label]: { '$regex': filter[1] } }).limit(limit).skip(page * limit)
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allObjectFilter,
                    total: totalProduct,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalProduct / limit)
                })
            }
            if (sort) {
                const objectSort = {}
                objectSort[sort[1]] = sort[0]
                const allProductSort = await Product.find().limit(limit).skip(page * limit).sort(objectSort)
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allProductSort,
                    total: totalProduct,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalProduct / limit)
                })
            }

            if (!limit) {
                allProduct = await Product.find()//video 56
            } else {
                // skip() bỏ bao nhiêu sản phẩm để lấy sp tiếp
                allProduct = await Product.find().limit(limit).skip(page * limit)//video 26
            }
            resolve({
                status: 'OK',
                message: 'Success',
                data: allProduct,
                total: totalProduct,
                pageCurrent: Number(page + 1),
                totalPage: Math.ceil(totalProduct / limit)
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getDetailsProduct = (id) => {
    return new Promise(async (resolve, reject) => {

        try {
            // Check email có tồn tại trong database không
            const product = await Product.findOne({
                _id: id
            })

            if (product === null) {
                resolve({
                    status: 'OK',
                    message: 'The product is not defined!',
                })
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS!',
                data: product
            })


        } catch (e) {
            reject(e)
        }
    })
}
const getAllType = () => {
    return new Promise(async (resolve, reject) => {
        try {
            // skip() bỏ bao nhiêu sản phẩm để lấy sp tiếp
            const allType = await Product.distinct('type')

            resolve({
                status: 'OK',
                message: 'Success',
                data: allType,
            })
        } catch (e) {
            reject(e)
        }
    })
}

module.exports = {
    createProduct,
    updateProduct,
    deleteProduct,
    getDetailsProduct,
    getAllProduct,
    deleteManyProduct,
    getAllType
}