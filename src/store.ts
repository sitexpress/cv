import { configureStore } from '@reduxjs/toolkit';
import cryptoSlice from './features/cryptoSlice';
import appSlice from './features/appSlice';
import incrementSlice from './features/incrementSlice';

export const store = configureStore({
  reducer: {
    app: appSlice,
    increment: incrementSlice,
    crypto: cryptoSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
