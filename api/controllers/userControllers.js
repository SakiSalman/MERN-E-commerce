import bcrypt from 'bcrypt'
import User from '../models/User.js'
import createError from '../utility/createError.js'
import { hasPassword } from '../utility/hasPassword.js'
/**
 * 
 * @param {method} GET 
 * @param {route} /api/v1/user 
 * @param {access} admin 
 */
export const registerUser = async (req, res, next) => {
    
    
    try {
        const {name, email,password, phone} = req.body

        const existingUser = await User.findOne({email})

        if (existingUser) {
            return next(createError(200, 'User exist with this email.'))
        }

        const hasPass = await hasPassword(password)
        
        const user = await User.create({
            name, email,password : hasPass, phone
        })  

        return res.status(200).json({
            user : user,
            message : 'New user Created Successfully'
        })


    } catch (error) {
        console.log(error);
        return next(createError(404, 'InValid API Request for User Register'))

    }
}
