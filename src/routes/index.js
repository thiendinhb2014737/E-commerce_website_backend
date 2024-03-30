const UserRouter = require('./UserRouter')
const ProductRouter = require('./ProductRouter')
const OrderRouter = require('./OrderRouter')
const PaymentRouter = require('./PaymentRouter')
const EventRouter = require('./EventRouter')
const ContactRouter = require('./ContactRouter')

const routes = (app) => {
    app.use('/api/user', UserRouter)
    app.use('/api/product', ProductRouter)
    app.use('/api/order', OrderRouter)
    app.use('/api/payment', PaymentRouter)
    app.use('/api/event', EventRouter)
    app.use('/api/contact', ContactRouter)
}


module.exports = routes