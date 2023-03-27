import bcrypt from 'bcrypt'


// has Passwrd
export const hasPassword = async (password) => {

    const salt = await bcrypt.genSalt(10)

    const hasPassword = await bcrypt.hash(password, salt)

    return hasPassword
}

// compare password

export const compareHasPassword = async (password, hasPass) => {
    
    return await bcrypt.compare(password, hasPass)
}