import express from 'express'
const router = express.Router()
import { addOrderIems } from '../controller/orderController.js'
import { protect } from '../middleware/authMiddleware.js'

router.route('/').post(protect, addOrderIems)

export default router
