import jwt from 'jsonwebtoken'



export const createToken = (data, exp='365d') => {

    const token = jwt.sign(data, process.env.JWT_SEC, { expiresIn: exp })

    return token

}