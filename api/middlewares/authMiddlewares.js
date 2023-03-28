
import jwt from "jsonwebtoken";
import User from "../models/UserModel";
import createError from "../utility/createError";

// require sign in

export const requireSignIn = async (req, res, next) => {
  try {
    const decode = jwt.verify(req.headers, authorization, process.env.JWT_SEC);
    req.user = decode
    next();
  } catch (error) {
       console.log(error);
  }
};


// is admin check

export const isAdmin = async (req, res, next) => {
    try {
      const user = await User.findById(req.user.id);
        
      if (user.role !==1) {
        return res.status(401).send({
            success : false,
            message : 'Unauthorized Access'
        })
      }
      else{
        next();
      }
     
    } catch (error) {
         console.log(error);
         res.send({
            Success : false,
            error,
            message : 'Error in Middleware'
         })
    }
  };
