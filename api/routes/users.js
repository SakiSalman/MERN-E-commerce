import express from 'express'
import { registerUser, loginUser } from '../controllers/userControllers.js'


const router = express.Router()



// REGISTER ROUTE
router.post('/register', registerUser)

// login ROUTE
router.post('/login', loginUser)


//  export router
export default router