import { createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit';
import { cryptosAPI } from '@/common/api/app-api';
import { setErrorAC, setStatusAC } from './appSlice';
import { handleServerAppError } from '@/common/utils/handle-server-network-error';

const initialState = {
  cryptos: [] as cryptoSliceType[],
};

export const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    onSetCryptoSliceAC(state, action: PayloadAction<CryptolistsResponseType>) {
      console.log('action.payload.data:', action.payload.cryptos.data);
      state.cryptos = action.payload.cryptos.data;
    },
  },
  extraReducers: () => {},
});

export const { onSetCryptoSliceAC } = cryptoSlice.actions;
export default cryptoSlice.reducer;

export const  fetchCryptolistsTC = () => (dispatch: Dispatch) => {
  dispatch(setStatusAC({ status: 'loading' }));
  cryptosAPI
    .getCryptos()
    .then((res) => {
      dispatch(onSetCryptoSliceAC({ cryptos: res.data }));
      dispatch(setStatusAC({ status: 'succeeded' }));
    })
    .catch((error) => {
      // handleServerAppError(error, dispatch);
      dispatch(setErrorAC({ error }));
    });
};

export type CryptolistsResponseType = {
  cryptos: cryptosType;
};
export type cryptosType = {
  data: cryptoSliceType[];
  length: number;
  message: string;
  success: boolean;
};
export type cryptoSliceType = {
  TOKEN_ID: number;
  CURRENT_PRICE: number;
  TOKEN_NAME: string;
  TOKEN_SYMBOL: string;
};
