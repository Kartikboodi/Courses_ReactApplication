import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'
import Course from '../../Course'

interface wishlistState{
    courses:Course[],
}

const initialState:wishlistState = {
    courses:[]
}

export const wishlistSlice = createSlice({
    name:'Wishlist',
    initialState,
    reducers:{
        addToWishlist:(state, action:PayloadAction<Course>) => {
            state.courses.push(action.payload);
        },
        removeFromWishlist:(state, action:PayloadAction<Course>) =>{
            state.courses = state.courses.filter(c => c.id !==action.payload.id);
        }
    },
})

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions

export default wishlistSlice.reducer

