import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Post {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: {
    likes: number;
    dislikes: number;
  };
  views: number;
  userId: number;
}

interface Posts {
  posts: Post[];
  total: number;
  skip: number;
  limit: number;
}

interface PostsState {
  entities: Posts[];
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  value: number;
}

const initialState = {
  entities: [],
  loading: 'idle',
  value: 0,
} satisfies PostsState as PostsState;


export const incrementSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    refresh: (state) => {
      state.value = 0;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount, refresh } = incrementSlice.actions;
export default incrementSlice.reducer;
