import express from 'express'
import { registerUser } from '../controllers/userControllers.js'


const router = express.Router()



// REGISTER ROUTE
router.post('/register', registerUser)


//  export router
export default router