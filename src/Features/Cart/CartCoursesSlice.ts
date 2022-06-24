import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'
import Course from '../../Course'

interface CartCoursesState{
    courses:Course[],
    totalCartValue:number
}

const initialState:CartCoursesState = {
    courses:[],
    totalCartValue:0
}

export const CartCoursesSlice = createSlice({
    name:'CoursesInCart',
    initialState,
    reducers:{
        addToCart:(state, action:PayloadAction<Course>) => {
            state.courses.push(action.payload);
            state.totalCartValue += action.payload.discountedPrice;
        },
        removeFromCart:(state, action:PayloadAction<Course>) =>{
            state.courses = state.courses.filter(c => c.id !==action.payload.id);
            state.totalCartValue -= action.payload.discountedPrice;
        }
    },
})

export const { addToCart, removeFromCart } = CartCoursesSlice.actions

export default CartCoursesSlice.reducer

