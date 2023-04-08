import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user : {},
    users : []
}


export const userSlice = createSlice({
    name : 'user',
    initialState,
    reducers : {
        loginRedux : (state, action) => {
            state.user = action.payload
        },
        signUpRedux : (state, action) => {
                
                state.user = action.payload
        }
    }
})
export const {loginRedux,signUpRedux } = userSlice.actions
 export default userSlice.reducer