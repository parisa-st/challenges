import { configureStore } from '@reduxjs/toolkit';
import { productsApi } from '../features/products/productsApi';
import { usersApi } from '../features/users/usersApi';
import selectionReducer from '../features/selection/selectionSlice';

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    selection: selectionReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware, usersApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;