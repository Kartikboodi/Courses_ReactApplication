import { configureStore } from '@reduxjs/toolkit'
import CartCoursesReducer from '../Features/Cart/CartCoursesSlice'
import WishlistReducer from '../Features/WishList/WishlistSlice'

export const store = configureStore({
  reducer: {
    Cart:CartCoursesReducer,
    Wishlist:WishlistReducer
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch