import { Dispatch } from 'redux';
import { setErrorAC, setStatusAC } from '@/features/appSlice';

export const handleServerAppError = (data: any, dispatch: Dispatch) => {
  dispatch(setErrorAC({ error: data }));
  dispatch(setErrorAC({ error: 'some error occurred' }));
  dispatch(setStatusAC({ status: 'failed' }));
};
