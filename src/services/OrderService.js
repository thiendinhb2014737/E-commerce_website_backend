const Order = require("../models/OrderProduct")
const Product = require("../models/ProductModel")
const EmailService = require("../services/EmailService")

const createOrder = (newOrder) => {
    return new Promise(async (resolve, reject) => {
        const { orderItems, paymentMethod, itemsPrice, shippingPrice, totalPrice, fullName, address, phone, user, isPaid, paidAt, email, createOrderdAt, statusOder, maDH } = newOrder
        try {
            // console.log('orderItems', orderItems)
            const promises = orderItems.map(async (order) => {
                const size = order.size
                const color = order.color
                if (size === 'S') {
                    if (color === '#efefef') {
                        const productData = await Product.findOneAndUpdate(
                            {
                                _id: order.product,
                                countInStock: { $gte: order.amount },
                                countS: { $gte: order.amount },
                                countColorBeS: { $gte: order.amount }
                            },
                            {
                                $inc: {
                                    countInStock: -order.amount,
                                    selled: +order.amount,
                                    countS: -order.amount,
                                    countColorBeS: -order.amount
                                }
                            },
                            { new: true }
                        )
                        if (productData) {
                            return {
                                status: 'OK',
                                message: 'SUCCESS'
                            }
                        }
                        else {
                            return {
                                status: 'OK',
                                message: 'ERR',
                                id: order.product
                            }
                        }
                    } else if (color === 'white') {
                        const productData = await Product.findOneAndUpdate(
                            {
                                _id: order.product,
                                countInStock: { $gte: order.amount },
                                countS: { $gte: order.amount },
                                countColorWhiteS: { $gte: order.amount }
                            },
                            {
                                $inc: {
                                    countInStock: -order.amount,
                                    selled: +order.amount,
                                    countS: -order.amount,
                                    countColorWhiteS: -order.amount
                                }
                            },
                            { new: true }
                        )
                        if (productData) {
                            return {
                                status: 'OK',
                                message: 'SUCCESS'
                            }
                        }
                        else {
                            return {
                                status: 'OK',
                                message: 'ERR',
                                id: order.product
                            }
                        }

                    } else if (color === 'black') {
                        const productData = await Product.findOneAndUpdate(
                            {
                                _id: order.product,
                                countInStock: { $gte: order.amount },
                                countS: { $gte: order.amount },
                                countColorBlackS: { $gte: order.amount }
                            },
                            {
                                $inc: {
                                    countInStock: -order.amount,
                                    selled: +order.amount,
                                    countS: -order.amount,
                                    countColorBlackS: -order.amount
                                }
                            },
                            { new: true }
                        )
                        if (productData) {
                            return {
                                status: 'OK',
                                message: 'SUCCESS'
                            }
                        }
                        else {
                            return {
                                status: 'OK',
                                message: 'ERR',
                                id: order.product
                            }
                        }

                    } else if (color === 'blue') {
                        const productData = await Product.findOneAndUpdate(
                            {
                                _id: order.product,
                                countInStock: { $gte: order.amount },
                                countS: { $gte: order.amount },
                                countColorBlueS: { $gte: order.amount }
                            },
                            {
                                $inc: {
                                    countInStock: -order.amount,
                                    selled: +order.amount,
                                    countS: -order.amount,
                                    countColorBlueS: -order.amount
                                }
                            },
                            { new: true }
                        )
                        if (productData) {
                            return {
                                status: 'OK',
                                message: 'SUCCESS'
                            }
                        }
                        else {
                            return {
                                status: 'OK',
                                message: 'ERR',
                                id: order.product
                            }
                        }

                    }
                } else if (size === 'M') {
                    if (color === '#efefef') {
                        const productData = await Product.findOneAndUpdate(
                            {
                                _id: order.product,
                                countInStock: { $gte: order.amount },
                                countM: { $gte: order.amount },
                                countColorBeM: { $gte: order.amount }
                            },
                            {
                                $inc: {
                                    countInStock: -order.amount,
                                    selled: +order.amount,
                                    countM: -order.amount,
                                    countColorBeM: -order.amount
                                }
                            },
                            { new: true }
                        )
                        if (productData) {
                            return {
                                status: 'OK',
                                message: 'SUCCESS'
                            }
                        }
                        else {
                            return {
                                status: 'OK',
                                message: 'ERR',
                                id: order.product
                            }
                        }
                    } else if (color === 'white') {
                        const productData = await Product.findOneAndUpdate(
                            {
                                _id: order.product,
                                countInStock: { $gte: order.amount },
                                countM: { $gte: order.amount },
                                countColorWhiteM: { $gte: order.amount }
                            },
                            {
                                $inc: {
                                    countInStock: -order.amount,
                                    selled: +order.amount,
                                    countM: -order.amount,
                                    countColorWhiteM: -order.amount
                                }
                            },
                            { new: true }
                        )
                        if (productData) {
                            return {
                                status: 'OK',
                                message: 'SUCCESS'
                            }
                        }
                        else {
                            return {
                                status: 'OK',
                                message: 'ERR',
                                id: order.product
                            }
                        }

                    } else if (color === 'black') {
                        const productData = await Product.findOneAndUpdate(
                            {
                                _id: order.product,
                                countInStock: { $gte: order.amount },
                                countM: { $gte: order.amount },
                                countColorBlackM: { $gte: order.amount }
                            },
                            {
                                $inc: {
                                    countInStock: -order.amount,
                                    selled: +order.amount,
                                    countM: -order.amount,
                                    countColorBlackM: -order.amount
                                }
                            },
                            { new: true }
                        )
                        if (productData) {
                            return {
                                status: 'OK',
                                message: 'SUCCESS'
                            }
                        }
                        else {
                            return {
                                status: 'OK',
                                message: 'ERR',
                                id: order.product
                            }
                        }

                    } else if (color === 'blue') {
                        const productData = await Product.findOneAndUpdate(
                            {
                                _id: order.product,
                                countInStock: { $gte: order.amount },
                                countM: { $gte: order.amount },
                                countColorBlueM: { $gte: order.amount }
                            },
                            {
                                $inc: {
                                    countInStock: -order.amount,
                                    selled: +order.amount,
                                    countM: -order.amount,
                                    countColorBlueM: -order.amount
                                }
                            },
                            { new: true }
                        )
                        if (productData) {
                            return {
                                status: 'OK',
                                message: 'SUCCESS'
                            }
                        }
                        else {
                            return {
                                status: 'OK',
                                message: 'ERR',
                                id: order.product
                            }
                        }

                    }
                } else if (size === 'L') {
                    if (color === '#efefef') {
                        const productData = await Product.findOneAndUpdate(
                            {
                                _id: order.product,
                                countInStock: { $gte: order.amount },
                                countL: { $gte: order.amount },
                                countColorBeL: { $gte: order.amount }
                            },
                            {
                                $inc: {
                                    countInStock: -order.amount,
                                    selled: +order.amount,
                                    countL: -order.amount,
                                    countColorBeL: -order.amount
                                }
                            },
                            { new: true }
                        )
                        if (productData) {
                            return {
                                status: 'OK',
                                message: 'SUCCESS'
                            }
                        }
                        else {
                            return {
                                status: 'OK',
                                message: 'ERR',
                                id: order.product
                            }
                        }
                    } else if (color === 'white') {
                        const productData = await Product.findOneAndUpdate(
                            {
                                _id: order.product,
                                countInStock: { $gte: order.amount },
                                countL: { $gte: order.amount },
                                countColorWhiteL: { $gte: order.amount }
                            },
                            {
                                $inc: {
                                    countInStock: -order.amount,
                                    selled: +order.amount,
                                    countL: -order.amount,
                                    countColorWhiteL: -order.amount
                                }
                            },
                            { new: true }
                        )
                        if (productData) {
                            return {
                                status: 'OK',
                                message: 'SUCCESS'
                            }
                        }
                        else {
                            return {
                                status: 'OK',
                                message: 'ERR',
                                id: order.product
                            }
                        }

                    } else if (color === 'black') {
                        const productData = await Product.findOneAndUpdate(
                            {
                                _id: order.product,
                                countInStock: { $gte: order.amount },
                                countL: { $gte: order.amount },
                                countColorBlackL: { $gte: order.amount }
                            },
                            {
                                $inc: {
                                    countInStock: -order.amount,
                                    selled: +order.amount,
                                    countL: -order.amount,
                                    countColorBlackL: -order.amount
                                }
                            },
                            { new: true }
                        )
                        if (productData) {
                            return {
                                status: 'OK',
                                message: 'SUCCESS'
                            }
                        }
                        else {
                            return {
                                status: 'OK',
                                message: 'ERR',
                                id: order.product
                            }
                        }

                    } else if (color === 'blue') {
                        const productData = await Product.findOneAndUpdate(
                            {
                                _id: order.product,
                                countInStock: { $gte: order.amount },
                                countL: { $gte: order.amount },
                                countColorBlueL: { $gte: order.amount }
                            },
                            {
                                $inc: {
                                    countInStock: -order.amount,
                                    selled: +order.amount,
                                    countL: -order.amount,
                                    countColorBlueL: -order.amount
                                }
                            },
                            { new: true }
                        )
                        if (productData) {
                            return {
                                status: 'OK',
                                message: 'SUCCESS'
                            }
                        }
                        else {
                            return {
                                status: 'OK',
                                message: 'ERR',
                                id: order.product
                            }
                        }

                    }
                } else if (size === 'XL') {
                    if (color === '#efefef') {
                        const productData = await Product.findOneAndUpdate(
                            {
                                _id: order.product,
                                countInStock: { $gte: order.amount },
                                countXL: { $gte: order.amount },
                                countColorBeXL: { $gte: order.amount }
                            },
                            {
                                $inc: {
                                    countInStock: -order.amount,
                                    selled: +order.amount,
                                    countXL: -order.amount,
                                    countColorBeXL: -order.amount
                                }
                            },
                            { new: true }
                        )
                        if (productData) {
                            return {
                                status: 'OK',
                                message: 'SUCCESS'
                            }
                        }
                        else {
                            return {
                                status: 'OK',
                                message: 'ERR',
                                id: order.product
                            }
                        }
                    } else if (color === 'white') {
                        const productData = await Product.findOneAndUpdate(
                            {
                                _id: order.product,
                                countInStock: { $gte: order.amount },
                                countXL: { $gte: order.amount },
                                countColorWhiteXL: { $gte: order.amount }
                            },
                            {
                                $inc: {
                                    countInStock: -order.amount,
                                    selled: +order.amount,
                                    countXL: -order.amount,
                                    countColorWhiteXL: -order.amount
                                }
                            },
                            { new: true }
                        )
                        if (productData) {
                            return {
                                status: 'OK',
                                message: 'SUCCESS'
                            }
                        }
                        else {
                            return {
                                status: 'OK',
                                message: 'ERR',
                                id: order.product
                            }
                        }

                    } else if (color === 'black') {
                        const productData = await Product.findOneAndUpdate(
                            {
                                _id: order.product,
                                countInStock: { $gte: order.amount },
                                countXL: { $gte: order.amount },
                                countColorBlackXL: { $gte: order.amount }
                            },
                            {
                                $inc: {
                                    countInStock: -order.amount,
                                    selled: +order.amount,
                                    countXL: -order.amount,
                                    countColorBlackXL: -order.amount
                                }
                            },
                            { new: true }
                        )
                        if (productData) {
                            return {
                                status: 'OK',
                                message: 'SUCCESS'
                            }
                        }
                        else {
                            return {
                                status: 'OK',
                                message: 'ERR',
                                id: order.product
                            }
                        }

                    } else if (color === 'blue') {
                        const productData = await Product.findOneAndUpdate(
                            {
                                _id: order.product,
                                countInStock: { $gte: order.amount },
                                countXL: { $gte: order.amount },
                                countColorBlueXL: { $gte: order.amount }
                            },
                            {
                                $inc: {
                                    countInStock: -order.amount,
                                    selled: +order.amount,
                                    countXL: -order.amount,
                                    countColorBlueXL: -order.amount
                                }
                            },
                            { new: true }
                        )
                        if (productData) {
                            return {
                                status: 'OK',
                                message: 'SUCCESS'
                            }
                        }
                        else {
                            return {
                                status: 'OK',
                                message: 'ERR',
                                id: order.product
                            }
                        }

                    }

                }

            })
            const results = await Promise.all(promises)

            const newData = results && results.filter((item) => item.id)

            if (newData?.length) {
                const arrId = []
                newData.forEach((item) => {
                    arrId.push(item.id)
                })
                resolve({
                    status: 'ERR',
                    message: `Sản phẩm với id: ${arrId.join(',')} không còn hàng!`
                })

            } else {
                const createdOrder = await Order.create({
                    orderItems,
                    shippingAddress: {
                        fullName,
                        address,
                        phone
                    },
                    paymentMethod,
                    itemsPrice,
                    shippingPrice,
                    totalPrice,
                    user: user,
                    isPaid,
                    paidAt,
                    createOrderdAt,
                    statusOder,
                    maDH
                })

                if (createdOrder) {
                    await EmailService.sendEmailCreateOrder(email, orderItems)
                    resolve({
                        status: 'OK',
                        message: 'success',
                    })
                }
            }
        }
        catch (e) {
            reject(e)
        }
    })
}

// const deleteManyProduct = (ids) => {
//     return new Promise(async (resolve, reject) => {
//         try {
//             await Product.deleteMany({ _id: ids })
//             resolve({
//                 status: 'OK',
//                 message: 'Delete product success',
//             })
//         } catch (e) {
//             reject(e)
//         }
//     })
// }


const getAllOrderDetails = (id, sort, limit, filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (filter) {
                const label = filter[0];
                const order = await Order.find({ [label]: { '$regex': filter[1] } }).limit(limit)
                resolve({
                    status: 'OK',
                    message: 'SUCESSS',
                    data: order
                })
            }
            if (sort) {
                const objectSort = {}
                objectSort[sort[1]] = sort[0]
                const order = await Order.find({
                    user: id
                }).sort(objectSort).limit(limit)

                resolve({
                    status: 'OK',
                    message: 'Get all user seccess!',
                    data: order,
                })
            }
            else {
                const order = await Order.find({
                    user: id
                }).limit(limit)
                if (order === null) {
                    resolve({
                        status: 'ERR',
                        message: 'The order is not defined'
                    })
                }

                resolve({
                    status: 'OK',
                    message: 'SUCESSS',
                    data: order
                })

            }

        } catch (e) {
            // console.log('e', e)
            reject(e)
        }
    })
}
const getDetailsOrder = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const order = await Order.findById({
                _id: id
            }).sort({ createdAt: -1, updatedAt: -1 })
            if (order === null) {
                resolve({
                    status: 'ERR',
                    message: 'The order is not defined'
                })
            }

            resolve({
                status: 'OK',
                message: 'SUCESSS',
                data: order
            })
        } catch (e) {
            // console.log('e', e)
            reject(e)
        }
    })
}


const cancelOrderDetails = (id, data) => {

    return new Promise(async (resolve, reject) => {
        try {
            let order = []
            const promises = data.map(async (order) => {
                const size = order.size
                const color = order.color
                if (size === 'S') {
                    if (color === '#efefef') {
                        const productData = await Product.findOneAndUpdate(
                            {
                                _id: order.product,
                                selled: { $gte: order.amount },
                            },
                            {
                                $inc: {
                                    countInStock: +order.amount,
                                    selled: -order.amount,
                                    countS: +order.amount,
                                    countColorBeS: +order.amount
                                }
                            },
                            { new: true }
                        )
                        if (productData) {
                            order = await Order.findByIdAndDelete(id)
                            if (order === null) {
                                resolve({
                                    status: 'ERR',
                                    message: 'The order is not defined'
                                })
                            }
                        } else {
                            return {
                                status: 'OK',
                                message: 'ERR',
                                id: order.product
                            }
                        }
                    } else if (color === 'white') {
                        const productData = await Product.findOneAndUpdate(
                            {
                                _id: order.product,
                                selled: { $gte: order.amount },

                            },
                            {
                                $inc: {
                                    countInStock: +order.amount,
                                    selled: -order.amount,
                                    countS: +order.amount,
                                    countColorWhiteS: +order.amount
                                }
                            },
                            { new: true }
                        )
                        if (productData) {
                            order = await Order.findByIdAndDelete(id)
                            if (order === null) {
                                resolve({
                                    status: 'ERR',
                                    message: 'The order is not defined'
                                })
                            }
                        } else {
                            return {
                                status: 'OK',
                                message: 'ERR',
                                id: order.product
                            }
                        }

                    } else if (color === 'black') {
                        const productData = await Product.findOneAndUpdate(
                            {
                                _id: order.product,
                                selled: { $gte: order.amount },

                            },
                            {
                                $inc: {
                                    countInStock: +order.amount,
                                    selled: -order.amount,
                                    countS: +order.amount,
                                    countColorBlackS: +order.amount
                                }
                            },
                            { new: true }
                        )
                        if (productData) {
                            order = await Order.findByIdAndDelete(id)
                            if (order === null) {
                                resolve({
                                    status: 'ERR',
                                    message: 'The order is not defined'
                                })
                            }
                        } else {
                            return {
                                status: 'OK',
                                message: 'ERR',
                                id: order.product
                            }
                        }

                    } else if (color === 'blue') {
                        const productData = await Product.findOneAndUpdate(
                            {
                                _id: order.product,
                                selled: { $gte: order.amount },
                            },
                            {
                                $inc: {
                                    countInStock: +order.amount,
                                    selled: -order.amount,
                                    countS: +order.amount,
                                    countColorBlueS: +order.amount
                                }
                            },
                            { new: true }
                        )
                        if (productData) {
                            order = await Order.findByIdAndDelete(id)
                            if (order === null) {
                                resolve({
                                    status: 'ERR',
                                    message: 'The order is not defined'
                                })
                            }
                        } else {
                            return {
                                status: 'OK',
                                message: 'ERR',
                                id: order.product
                            }
                        }

                    }
                } else if (size === 'M') {
                    if (color === '#efefef') {
                        const productData = await Product.findOneAndUpdate(
                            {
                                _id: order.product,
                                selled: { $gte: order.amount },
                            },
                            {
                                $inc: {
                                    countInStock: +order.amount,
                                    selled: -order.amount,
                                    countM: +order.amount,
                                    countColorBeM: +order.amount
                                }
                            },
                            { new: true }
                        )
                        if (productData) {
                            order = await Order.findByIdAndDelete(id)
                            if (order === null) {
                                resolve({
                                    status: 'ERR',
                                    message: 'The order is not defined'
                                })
                            }
                        } else {
                            return {
                                status: 'OK',
                                message: 'ERR',
                                id: order.product
                            }
                        }
                    } else if (color === 'white') {
                        const productData = await Product.findOneAndUpdate(
                            {
                                _id: order.product,
                                selled: { $gte: order.amount },
                            },
                            {
                                $inc: {
                                    countInStock: +order.amount,
                                    selled: -order.amount,
                                    countM: +order.amount,
                                    countColorWhiteM: +order.amount
                                }
                            },
                            { new: true }
                        )
                        if (productData) {
                            order = await Order.findByIdAndDelete(id)
                            if (order === null) {
                                resolve({
                                    status: 'ERR',
                                    message: 'The order is not defined'
                                })
                            }
                        } else {
                            return {
                                status: 'OK',
                                message: 'ERR',
                                id: order.product
                            }
                        }

                    } else if (color === 'black') {
                        const productData = await Product.findOneAndUpdate(
                            {
                                _id: order.product,
                                selled: { $gte: order.amount },
                            },
                            {
                                $inc: {
                                    countInStock: +order.amount,
                                    selled: -order.amount,
                                    countM: +order.amount,
                                    countColorBlackM: +order.amount
                                }
                            },
                            { new: true }
                        )
                        if (productData) {
                            order = await Order.findByIdAndDelete(id)
                            if (order === null) {
                                resolve({
                                    status: 'ERR',
                                    message: 'The order is not defined'
                                })
                            }
                        } else {
                            return {
                                status: 'OK',
                                message: 'ERR',
                                id: order.product
                            }
                        }

                    } else if (color === 'blue') {
                        const productData = await Product.findOneAndUpdate(
                            {
                                _id: order.product,
                                selled: { $gte: order.amount },
                            },
                            {
                                $inc: {
                                    countInStock: +order.amount,
                                    selled: -order.amount,
                                    countM: +order.amount,
                                    countColorBlueM: +order.amount
                                }
                            },
                            { new: true }
                        )
                        if (productData) {
                            order = await Order.findByIdAndDelete(id)
                            if (order === null) {
                                resolve({
                                    status: 'ERR',
                                    message: 'The order is not defined'
                                })
                            }
                        } else {
                            return {
                                status: 'OK',
                                message: 'ERR',
                                id: order.product
                            }
                        }

                    }
                } else if (size === 'L') {
                    if (color === '#efefef') {
                        const productData = await Product.findOneAndUpdate(
                            {
                                _id: order.product,
                                selled: { $gte: order.amount },
                            },
                            {
                                $inc: {
                                    countInStock: +order.amount,
                                    selled: -order.amount,
                                    countL: +order.amount,
                                    countColorBeL: +order.amount
                                }
                            },
                            { new: true }
                        )
                        if (productData) {
                            order = await Order.findByIdAndDelete(id)
                            if (order === null) {
                                resolve({
                                    status: 'ERR',
                                    message: 'The order is not defined'
                                })
                            }
                        } else {
                            return {
                                status: 'OK',
                                message: 'ERR',
                                id: order.product
                            }
                        }
                    } else if (color === 'white') {
                        const productData = await Product.findOneAndUpdate(
                            {
                                _id: order.product,
                                selled: { $gte: order.amount },
                            },
                            {
                                $inc: {
                                    countInStock: +order.amount,
                                    selled: -order.amount,
                                    countL: +order.amount,
                                    countColorWhiteL: +order.amount
                                }
                            },
                            { new: true }
                        )
                        if (productData) {
                            order = await Order.findByIdAndDelete(id)
                            if (order === null) {
                                resolve({
                                    status: 'ERR',
                                    message: 'The order is not defined'
                                })
                            }
                        } else {
                            return {
                                status: 'OK',
                                message: 'ERR',
                                id: order.product
                            }
                        }

                    } else if (color === 'black') {
                        const productData = await Product.findOneAndUpdate(
                            {
                                _id: order.product,
                                selled: { $gte: order.amount },
                            },
                            {
                                $inc: {
                                    countInStock: +order.amount,
                                    selled: -order.amount,
                                    countL: +order.amount,
                                    countColorBlackL: +order.amount
                                }
                            },
                            { new: true }
                        )
                        if (productData) {
                            order = await Order.findByIdAndDelete(id)
                            if (order === null) {
                                resolve({
                                    status: 'ERR',
                                    message: 'The order is not defined'
                                })
                            }
                        } else {
                            return {
                                status: 'OK',
                                message: 'ERR',
                                id: order.product
                            }
                        }

                    } else if (color === 'blue') {
                        const productData = await Product.findOneAndUpdate(
                            {
                                _id: order.product,
                                selled: { $gte: order.amount },
                            },
                            {
                                $inc: {
                                    countInStock: +order.amount,
                                    selled: -order.amount,
                                    countL: +order.amount,
                                    countColorBlueL: +order.amount
                                }
                            },
                            { new: true }
                        )
                        if (productData) {
                            order = await Order.findByIdAndDelete(id)
                            if (order === null) {
                                resolve({
                                    status: 'ERR',
                                    message: 'The order is not defined'
                                })
                            }
                        } else {
                            return {
                                status: 'OK',
                                message: 'ERR',
                                id: order.product
                            }
                        }

                    }
                } else if (size === 'XL') {
                    if (color === '#efefef') {
                        const productData = await Product.findOneAndUpdate(
                            {
                                _id: order.product,
                                selled: { $gte: order.amount },
                            },
                            {
                                $inc: {
                                    countInStock: +order.amount,
                                    selled: -order.amount,
                                    countXL: +order.amount,
                                    countColorBeXL: +order.amount
                                }
                            },
                            { new: true }
                        )
                        if (productData) {
                            order = await Order.findByIdAndDelete(id)
                            if (order === null) {
                                resolve({
                                    status: 'ERR',
                                    message: 'The order is not defined'
                                })
                            }
                        } else {
                            return {
                                status: 'OK',
                                message: 'ERR',
                                id: order.product
                            }
                        }
                    } else if (color === 'white') {
                        const productData = await Product.findOneAndUpdate(
                            {
                                _id: order.product,
                                selled: { $gte: order.amount },
                            },
                            {
                                $inc: {
                                    countInStock: +order.amount,
                                    selled: -order.amount,
                                    countXL: +order.amount,
                                    countColorWhiteXL: +order.amount
                                }
                            },
                            { new: true }
                        )
                        if (productData) {
                            order = await Order.findByIdAndDelete(id)
                            if (order === null) {
                                resolve({
                                    status: 'ERR',
                                    message: 'The order is not defined'
                                })
                            }
                        } else {
                            return {
                                status: 'OK',
                                message: 'ERR',
                                id: order.product
                            }
                        }

                    } else if (color === 'black') {
                        const productData = await Product.findOneAndUpdate(
                            {
                                _id: order.product,
                                selled: { $gte: order.amount },
                            },
                            {
                                $inc: {
                                    countInStock: +order.amount,
                                    selled: -order.amount,
                                    countXL: +order.amount,
                                    countColorBlackXL: +order.amount
                                }
                            },
                            { new: true }
                        )
                        if (productData) {
                            order = await Order.findByIdAndDelete(id)
                            if (order === null) {
                                resolve({
                                    status: 'ERR',
                                    message: 'The order is not defined'
                                })
                            }
                        } else {
                            return {
                                status: 'OK',
                                message: 'ERR',
                                id: order.product
                            }
                        }

                    } else if (color === 'blue') {
                        const productData = await Product.findOneAndUpdate(
                            {
                                _id: order.product,
                                selled: { $gte: order.amount },
                            },
                            {
                                $inc: {
                                    countInStock: +order.amount,
                                    selled: -order.amount,
                                    countXL: +order.amount,
                                    countColorBlueXL: +order.amount
                                }
                            },
                            { new: true }
                        )
                        if (productData) {
                            order = await Order.findByIdAndDelete(id)
                            if (order === null) {
                                resolve({
                                    status: 'ERR',
                                    message: 'The order is not defined'
                                })
                            }
                        } else {
                            return {
                                status: 'OK',
                                message: 'ERR',
                                id: order.product
                            }
                        }

                    }
                }

            })
            const results = await Promise.all(promises)
            const newData = results && results[0] && results[0].id

            if (newData) {
                resolve({
                    status: 'ERR',
                    message: `Sản phẩm với id: ${newData} không tồn tại`
                })
            }
            resolve({
                status: 'OK',
                message: 'success',
                data: order
            })
        } catch (e) {
            reject(e)
        }
    })
}
// 2/12/2024 Thêm filter
const getAllOrder = (sort, filter) => {
    //console.log('filter', filter)
    return new Promise(async (resolve, reject) => {
        try {
            if (filter) {
                const label = filter[0]
                const allOrder = await Order.find({ [label]: { '$regex': filter[1] } })

                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allOrder,
                })
            }
            if (sort) {
                const objectSort = {}
                objectSort[sort[1]] = sort[0]
                allOrder = await Order.find().sort(objectSort)
                resolve({
                    status: 'OK',
                    message: 'Get all user seccess!',
                    data: allOrder,
                })
            }
            else {
                const allOrder = await Order.find()
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allOrder
                })
            }

        } catch (e) {
            reject(e)
        }
    })
}
const getOrderMonth = (filter) => {
    //console.log('filter', filter)
    return new Promise(async (resolve, reject) => {
        try {
            if (filter) {
                const label = filter[0]
                const allOrderMonth = await Order.find({ [label]: { '$regex': filter[1] } })

                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allOrderMonth,
                })
            }

        } catch (e) {
            reject(e)
        }
    })
}
const countOrderMonth = (filter) => {
    //console.log('filter', filter)
    return new Promise(async (resolve, reject) => {
        try {
            if (filter) {
                const label = filter[0]
                const countOrderMonth = await Order.find({ [label]: { '$regex': filter[1] } }).countDocuments()

                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: countOrderMonth,
                })
            }

        } catch (e) {
            reject(e)
        }
    })
}
const countAllOrder = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const countAllOrder = await Order.countDocuments()
            resolve({
                status: 'OK',
                message: 'Success',
                data: countAllOrder
            })
        } catch (e) {
            reject(e)
        }
    })
}
const getFilterOrder = (filter) => {
    //console.log('filter', filter)
    return new Promise(async (resolve, reject) => {
        try {
            //let allProduct = []
            if (filter) {
                const label = filter[0]
                const allObjectFilter = await Order.find({ [label]: { '$regex': filter[1] } }).countDocuments()
                //console.log('allObjectFilter', allObjectFilter)
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allObjectFilter,
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}
const updateOrder = (id, data) => {
    return new Promise(async (resolve, reject) => {

        try {
            // Check email có tồn tại trong database không
            const checkProduct = await Order.findOne({
                _id: id
            })
            //console.log('checkUser', checkUser)
            if (checkProduct === null) {
                resolve({
                    status: 'OK',
                    message: 'The product is not defined!',
                })
            }

            const updatedOrder = await Order.findByIdAndUpdate(id, data, { new: true })

            resolve({
                status: 'OK',
                message: 'SUCCESS!',
                data: updatedOrder
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteOrder = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let order = []
            const promises = data.map(async (order) => {
                // const productData = await Product.findOneAndUpdate(
                //     {
                //         _id: order.product,
                //         selled: { $gte: order.amount }
                //     },
                //     {
                //         $inc: {
                //             countInStock: +order.amount,
                //             selled: -order.amount
                //         }
                //     },
                //     { new: true }
                // )
                // if (productData) {
                //     order = await Order.findByIdAndDelete(id)
                //     if (order === null) {
                //         resolve({
                //             status: 'ERR',
                //             message: 'The order is not defined'
                //         })
                //     }
                // } else {
                //     return {
                //         status: 'OK',
                //         message: 'ERR',
                //         id: order.product
                //     }
                // }
                const size = order.size
                const color = order.color
                if (size === 'S') {
                    if (color === '#efefef') {
                        const productData = await Product.findOneAndUpdate(
                            {
                                _id: order.product,
                                selled: { $gte: order.amount },
                            },
                            {
                                $inc: {
                                    countInStock: +order.amount,
                                    selled: -order.amount,
                                    countS: +order.amount,
                                    countColorBeS: +order.amount
                                }
                            },
                            { new: true }
                        )
                        if (productData) {
                            order = await Order.findByIdAndDelete(id)
                            if (order === null) {
                                resolve({
                                    status: 'ERR',
                                    message: 'The order is not defined'
                                })
                            }
                        } else {
                            return {
                                status: 'OK',
                                message: 'ERR',
                                id: order.product
                            }
                        }
                    } else if (color === 'white') {
                        const productData = await Product.findOneAndUpdate(
                            {
                                _id: order.product,
                                selled: { $gte: order.amount },

                            },
                            {
                                $inc: {
                                    countInStock: +order.amount,
                                    selled: -order.amount,
                                    countS: +order.amount,
                                    countColorWhiteS: +order.amount
                                }
                            },
                            { new: true }
                        )
                        if (productData) {
                            order = await Order.findByIdAndDelete(id)
                            if (order === null) {
                                resolve({
                                    status: 'ERR',
                                    message: 'The order is not defined'
                                })
                            }
                        } else {
                            return {
                                status: 'OK',
                                message: 'ERR',
                                id: order.product
                            }
                        }

                    } else if (color === 'black') {
                        const productData = await Product.findOneAndUpdate(
                            {
                                _id: order.product,
                                selled: { $gte: order.amount },

                            },
                            {
                                $inc: {
                                    countInStock: +order.amount,
                                    selled: -order.amount,
                                    countS: +order.amount,
                                    countColorBlackS: +order.amount
                                }
                            },
                            { new: true }
                        )
                        if (productData) {
                            order = await Order.findByIdAndDelete(id)
                            if (order === null) {
                                resolve({
                                    status: 'ERR',
                                    message: 'The order is not defined'
                                })
                            }
                        } else {
                            return {
                                status: 'OK',
                                message: 'ERR',
                                id: order.product
                            }
                        }

                    } else if (color === 'blue') {
                        const productData = await Product.findOneAndUpdate(
                            {
                                _id: order.product,
                                selled: { $gte: order.amount },
                            },
                            {
                                $inc: {
                                    countInStock: +order.amount,
                                    selled: -order.amount,
                                    countS: +order.amount,
                                    countColorBlueS: +order.amount
                                }
                            },
                            { new: true }
                        )
                        if (productData) {
                            order = await Order.findByIdAndDelete(id)
                            if (order === null) {
                                resolve({
                                    status: 'ERR',
                                    message: 'The order is not defined'
                                })
                            }
                        } else {
                            return {
                                status: 'OK',
                                message: 'ERR',
                                id: order.product
                            }
                        }

                    }
                } else if (size === 'M') {
                    if (color === '#efefef') {
                        const productData = await Product.findOneAndUpdate(
                            {
                                _id: order.product,
                                selled: { $gte: order.amount },
                            },
                            {
                                $inc: {
                                    countInStock: +order.amount,
                                    selled: -order.amount,
                                    countM: +order.amount,
                                    countColorBeM: +order.amount
                                }
                            },
                            { new: true }
                        )
                        if (productData) {
                            order = await Order.findByIdAndDelete(id)
                            if (order === null) {
                                resolve({
                                    status: 'ERR',
                                    message: 'The order is not defined'
                                })
                            }
                        } else {
                            return {
                                status: 'OK',
                                message: 'ERR',
                                id: order.product
                            }
                        }
                    } else if (color === 'white') {
                        const productData = await Product.findOneAndUpdate(
                            {
                                _id: order.product,
                                selled: { $gte: order.amount },
                            },
                            {
                                $inc: {
                                    countInStock: +order.amount,
                                    selled: -order.amount,
                                    countM: +order.amount,
                                    countColorWhiteM: +order.amount
                                }
                            },
                            { new: true }
                        )
                        if (productData) {
                            order = await Order.findByIdAndDelete(id)
                            if (order === null) {
                                resolve({
                                    status: 'ERR',
                                    message: 'The order is not defined'
                                })
                            }
                        } else {
                            return {
                                status: 'OK',
                                message: 'ERR',
                                id: order.product
                            }
                        }

                    } else if (color === 'black') {
                        const productData = await Product.findOneAndUpdate(
                            {
                                _id: order.product,
                                selled: { $gte: order.amount },
                            },
                            {
                                $inc: {
                                    countInStock: +order.amount,
                                    selled: -order.amount,
                                    countM: +order.amount,
                                    countColorBlackM: +order.amount
                                }
                            },
                            { new: true }
                        )
                        if (productData) {
                            order = await Order.findByIdAndDelete(id)
                            if (order === null) {
                                resolve({
                                    status: 'ERR',
                                    message: 'The order is not defined'
                                })
                            }
                        } else {
                            return {
                                status: 'OK',
                                message: 'ERR',
                                id: order.product
                            }
                        }

                    } else if (color === 'blue') {
                        const productData = await Product.findOneAndUpdate(
                            {
                                _id: order.product,
                                selled: { $gte: order.amount },
                            },
                            {
                                $inc: {
                                    countInStock: +order.amount,
                                    selled: -order.amount,
                                    countM: +order.amount,
                                    countColorBlueM: +order.amount
                                }
                            },
                            { new: true }
                        )
                        if (productData) {
                            order = await Order.findByIdAndDelete(id)
                            if (order === null) {
                                resolve({
                                    status: 'ERR',
                                    message: 'The order is not defined'
                                })
                            }
                        } else {
                            return {
                                status: 'OK',
                                message: 'ERR',
                                id: order.product
                            }
                        }

                    }
                } else if (size === 'L') {
                    if (color === '#efefef') {
                        const productData = await Product.findOneAndUpdate(
                            {
                                _id: order.product,
                                selled: { $gte: order.amount },
                            },
                            {
                                $inc: {
                                    countInStock: +order.amount,
                                    selled: -order.amount,
                                    countL: +order.amount,
                                    countColorBeL: +order.amount
                                }
                            },
                            { new: true }
                        )
                        if (productData) {
                            order = await Order.findByIdAndDelete(id)
                            if (order === null) {
                                resolve({
                                    status: 'ERR',
                                    message: 'The order is not defined'
                                })
                            }
                        } else {
                            return {
                                status: 'OK',
                                message: 'ERR',
                                id: order.product
                            }
                        }
                    } else if (color === 'white') {
                        const productData = await Product.findOneAndUpdate(
                            {
                                _id: order.product,
                                selled: { $gte: order.amount },
                            },
                            {
                                $inc: {
                                    countInStock: +order.amount,
                                    selled: -order.amount,
                                    countL: +order.amount,
                                    countColorWhiteL: +order.amount
                                }
                            },
                            { new: true }
                        )
                        if (productData) {
                            order = await Order.findByIdAndDelete(id)
                            if (order === null) {
                                resolve({
                                    status: 'ERR',
                                    message: 'The order is not defined'
                                })
                            }
                        } else {
                            return {
                                status: 'OK',
                                message: 'ERR',
                                id: order.product
                            }
                        }

                    } else if (color === 'black') {
                        const productData = await Product.findOneAndUpdate(
                            {
                                _id: order.product,
                                selled: { $gte: order.amount },
                            },
                            {
                                $inc: {
                                    countInStock: +order.amount,
                                    selled: -order.amount,
                                    countL: +order.amount,
                                    countColorBlackL: +order.amount
                                }
                            },
                            { new: true }
                        )
                        if (productData) {
                            order = await Order.findByIdAndDelete(id)
                            if (order === null) {
                                resolve({
                                    status: 'ERR',
                                    message: 'The order is not defined'
                                })
                            }
                        } else {
                            return {
                                status: 'OK',
                                message: 'ERR',
                                id: order.product
                            }
                        }

                    } else if (color === 'blue') {
                        const productData = await Product.findOneAndUpdate(
                            {
                                _id: order.product,
                                selled: { $gte: order.amount },
                            },
                            {
                                $inc: {
                                    countInStock: +order.amount,
                                    selled: -order.amount,
                                    countL: +order.amount,
                                    countColorBlueL: +order.amount
                                }
                            },
                            { new: true }
                        )
                        if (productData) {
                            order = await Order.findByIdAndDelete(id)
                            if (order === null) {
                                resolve({
                                    status: 'ERR',
                                    message: 'The order is not defined'
                                })
                            }
                        } else {
                            return {
                                status: 'OK',
                                message: 'ERR',
                                id: order.product
                            }
                        }

                    }
                } else if (size === 'XL') {
                    if (color === '#efefef') {
                        const productData = await Product.findOneAndUpdate(
                            {
                                _id: order.product,
                                selled: { $gte: order.amount },
                            },
                            {
                                $inc: {
                                    countInStock: +order.amount,
                                    selled: -order.amount,
                                    countXL: +order.amount,
                                    countColorBeXL: +order.amount
                                }
                            },
                            { new: true }
                        )
                        if (productData) {
                            order = await Order.findByIdAndDelete(id)
                            if (order === null) {
                                resolve({
                                    status: 'ERR',
                                    message: 'The order is not defined'
                                })
                            }
                        } else {
                            return {
                                status: 'OK',
                                message: 'ERR',
                                id: order.product
                            }
                        }
                    } else if (color === 'white') {
                        const productData = await Product.findOneAndUpdate(
                            {
                                _id: order.product,
                                selled: { $gte: order.amount },
                            },
                            {
                                $inc: {
                                    countInStock: +order.amount,
                                    selled: -order.amount,
                                    countXL: +order.amount,
                                    countColorWhiteXL: +order.amount
                                }
                            },
                            { new: true }
                        )
                        if (productData) {
                            order = await Order.findByIdAndDelete(id)
                            if (order === null) {
                                resolve({
                                    status: 'ERR',
                                    message: 'The order is not defined'
                                })
                            }
                        } else {
                            return {
                                status: 'OK',
                                message: 'ERR',
                                id: order.product
                            }
                        }

                    } else if (color === 'black') {
                        const productData = await Product.findOneAndUpdate(
                            {
                                _id: order.product,
                                selled: { $gte: order.amount },
                            },
                            {
                                $inc: {
                                    countInStock: +order.amount,
                                    selled: -order.amount,
                                    countXL: +order.amount,
                                    countColorBlackXL: +order.amount
                                }
                            },
                            { new: true }
                        )
                        if (productData) {
                            order = await Order.findByIdAndDelete(id)
                            if (order === null) {
                                resolve({
                                    status: 'ERR',
                                    message: 'The order is not defined'
                                })
                            }
                        } else {
                            return {
                                status: 'OK',
                                message: 'ERR',
                                id: order.product
                            }
                        }

                    } else if (color === 'blue') {
                        const productData = await Product.findOneAndUpdate(
                            {
                                _id: order.product,
                                selled: { $gte: order.amount },
                            },
                            {
                                $inc: {
                                    countInStock: +order.amount,
                                    selled: -order.amount,
                                    countXL: +order.amount,
                                    countColorBlueXL: +order.amount
                                }
                            },
                            { new: true }
                        )
                        if (productData) {
                            order = await Order.findByIdAndDelete(id)
                            if (order === null) {
                                resolve({
                                    status: 'ERR',
                                    message: 'The order is not defined'
                                })
                            }
                        } else {
                            return {
                                status: 'OK',
                                message: 'ERR',
                                id: order.product
                            }
                        }

                    }
                }

            })
            const results = await Promise.all(promises)
            const newData = results && results[0] && results[0].id

            if (newData) {
                resolve({
                    status: 'ERR',
                    message: `Sản phẩm với id: ${newData} không tồn tại`
                })
            }
            resolve({
                status: 'OK',
                message: 'success',
                data: order
            })
        } catch (e) {
            reject(e)
        }
    })

    // return new Promise(async (resolve, reject) => {
    //     try {
    //         // Check email có tồn tại trong database không
    //         const checkProduct = await Order.findOne({
    //             _id: id
    //         })
    //         if (checkProduct === null) {
    //             resolve({
    //                 status: 'OK',
    //                 message: 'The product is not defined!',
    //             })
    //         }
    //         await Order.findByIdAndDelete(id)
    //         resolve({
    //             status: 'OK',
    //             message: 'Delete product seccess!'
    //         })
    //     } catch (e) {
    //         reject(e)
    //     }
    // })
}

module.exports = {
    createOrder,
    getAllOrderDetails,
    getDetailsOrder,
    cancelOrderDetails,
    getAllOrder,
    updateOrder,
    deleteOrder,
    countAllOrder,
    getFilterOrder,
    getOrderMonth,
    countOrderMonth
}