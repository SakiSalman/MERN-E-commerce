import bcrypt from "bcrypt";
import User from "../models/User.js";
import createError from "../utility/createError.js";
import { compareHasPassword, hasPassword } from "../utility/hasPassword.js";
import { createToken } from "../utility/token.js";
/**
 *
 * @param {method} POST
 * @param {route} /api/v1/user
 * @param {access} admin
 */
export const registerUser = async (req, res, next) => {
  try {
    const { name, email, password, phone } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return next(createError(200, "User exist with this email."));
    }

    const hasPass = await hasPassword(password);

    const user = await User.create({
      name,
      email,
      password: hasPass,
      phone,
    });

    return res.status(200).json({
      user: user,
      message: "New user Created Successfully",
    });
  } catch (error) {
    console.log(error);
    return next(createError(404, "InValid API Request for User Register"));
  }
};

/**
 *
 * @param {method} GET
 * @param {route} /api/v1/user
 * @param {access} Public
 */
export const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      return next(createError(404, "No User Found!"));
    }

    const hasPass = await compareHasPassword(password, existingUser.password);

    if (!hasPass) {
        return next(createError(404, "Password does not matched!"));
    }

    const token = createToken({id : existingUser._id}, '7d')
    
    return res.status(200).json({
      user: {
        name : existingUser.name,
        email : existingUser.email,
        phone : existingUser.phone,
        address : existingUser.address
      },
      token : token,
      message: "Login Success!",
    });
  } catch (error) {
    console.log(error);
    return next(createError(404, "Invalid API Request in Login"));
  }
};
