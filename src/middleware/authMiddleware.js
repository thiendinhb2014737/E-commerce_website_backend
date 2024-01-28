const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()

const authMiddleware = (req, res, next) => {
    // split cat thanh 2 mang lay phan tu thu 2
    const token = req.headers.token?.split(' ')[1]
    jwt.verify(token, process.env.ACCESS_TOKEN, function (err, user) {
        if (err) {
            return res.status(404).json({
                message: 'The authentication',
                status: 'ERROR'
            })
        }

        // kiểm tra xem user có quyền admin không, nếu phải cho đi tiếp next()
        if (user?.isAdmin) {
            next()
        } else {
            return res.status(404).json({
                message: 'The authentication',
                status: 'ERROR'
            })
        }
    });
}

const authUserMiddleWare = (req, res, next) => {
    // split cat thanh 2 mang lay phan tu thu 2
    const token = req.headers.token?.split(' ')[1]
    const userId = req.params.id
    jwt.verify(token, process.env.ACCESS_TOKEN, function (err, user) {
        if (err) {
            return res.status(404).json({
                message: 'The authentication',
                status: 'ERROR'
            })
        }
        // console.log('user', user)
        // kiểm tra xem user có quyền admin không, nếu phải cho đi tiếp next()
        if (user?.isAdmin || user?.id === userId) {
            next()
        } else {
            return res.status(404).json({
                message: 'The authentication',
                status: 'ERROR'
            })
        }
    });
}

module.exports = {
    authMiddleware,
    authUserMiddleWare
}