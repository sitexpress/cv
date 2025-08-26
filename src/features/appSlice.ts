import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    status: 'idle' as RequestStatusType,
    error: null as string | null,
    isInitialized: true as boolean,
  },
  reducers: {
    setStatusAC(state, action: PayloadAction<{ status: RequestStatusType }>) {
      state.status = action.payload.status;
      state.error = null;
    },
    setAppIsInitializedAC(state, action: PayloadAction<{ isInitialized: boolean }>) {
      state.isInitialized = action.payload.isInitialized;
      state.error = null;
    },
    setErrorAC(state, action: PayloadAction<{ error: string | null }>) {
      state.error = action.payload.error;
    },
  },
});

export const { setStatusAC, setAppIsInitializedAC, setErrorAC } = appSlice.actions;
export default appSlice.reducer;
