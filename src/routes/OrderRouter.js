const express = require("express");
const router = express.Router()
const OrderController = require('../controllers/OrderController');
const { authUserMiddleWare, authMiddleware } = require("../middleware/authMiddleware");

router.post('/create', authUserMiddleWare, OrderController.createOrder)
router.get('/get-all-order/:id', authUserMiddleWare, OrderController.getAllOrderDetails)
router.get('/get-details-order/:id', authUserMiddleWare, OrderController.getDetailsOrder)
router.delete('/cancel-order/:id', authUserMiddleWare, OrderController.cancelOrderDetails)
router.get('/get-all-order', OrderController.getAllOrder)
router.put('/update/:id', authMiddleware, OrderController.updateOrder)//test
router.delete('/delete/:id', authMiddleware, OrderController.deleteOrder)
router.get('/count-all-order', authMiddleware, OrderController.countAllOrder)
router.get('/get-filter-order', authMiddleware, OrderController.getFilterOrder)
router.get('/get-order-month', authMiddleware, OrderController.getOrderMonth)
router.get('/count-order-month', authMiddleware, OrderController.countOrderMonth)
module.exports = router