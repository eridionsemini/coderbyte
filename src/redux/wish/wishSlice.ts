import {createSlice, createAsyncThunk, Dispatch} from '@reduxjs/toolkit';
import axios from '../instance';

type AsyncThunkConfig = {
  state?: unknown;
  dispatch?: Dispatch;
  extra?: unknown;
  rejectValue?: unknown;
  serializedErrorType?: unknown;
  pendingMeta?: unknown;
  fulfilledMeta?: unknown;
  rejectedMeta?: unknown;
};

type MyKnownError = {
  error: string;
};

type Type = {
  slot: number;
  type: {
    name: string;
    url: string;
  };
};

type NewWishAttributes = {
  pokemonId: number;
  name: string;
  image: string;
  types: Type[];
};

type WishesData = [] | Wish[];

type Wish = {
  pokemonId: number;
  name: string;
  image: string;
  types: Type[];
  userId: number;
  id: number;
  createdAt: string;
  updatedAt: string;
};

type SliceState = {
  loading: boolean;
  list: [] | WishesData;
};

type QueryParam = {
  name: string;
};

export const getUserWishes = createAsyncThunk<
  WishesData,
  QueryParam,
  AsyncThunkConfig
>('wishes/get', async (query, thunkAPI) => {
  const req = `/wish?name=${query.name}`;
  try {
    return (await axios.get(req)) as WishesData;
  } catch (e: any) {
    return thunkAPI.rejectWithValue({error: e.message} as MyKnownError);
  }
});

export const addPokemonToWishes = createAsyncThunk<
  Wish,
  NewWishAttributes,
  AsyncThunkConfig
>('wish/add', async (wish, thunkAPI) => {
  const {pokemonId, name, image, types} = wish;
  const req = '/wish';
  const body = {
    pokemonId,
    name,
    image,
    types,
  };
  try {
    const res = (await axios.post(req, body)) as Wish;
    thunkAPI.dispatch(appendNewWish(res));
    return res;
  } catch (e: any) {
    return thunkAPI.rejectWithValue({error: e.message} as MyKnownError);
  }
});

export const deleteWish = createAsyncThunk<boolean, number, AsyncThunkConfig>(
  'wish/delete',
  async (id, thunkAPI) => {
    const req = `/wish/${id}`;
    try {
      const res = (await axios.delete(req)) as boolean;
      thunkAPI.dispatch(removeWish(id));
      return res;
    } catch (e: any) {
      return thunkAPI.rejectWithValue({error: e.message} as MyKnownError);
    }
  },
);

const wishSlice = createSlice({
  name: 'wish',
  initialState: {
    list: [],
    loading: false,
  } as SliceState,
  reducers: {
    appendNewWish: (state, action) => {
      state.list = [...state.list, action.payload];
    },
    removeWish: (state, action) => {
      state.list = state.list.filter(list => list.id !== action.payload);
    },
  },
  extraReducers: builder => {
    builder.addCase(getUserWishes.fulfilled, (state, action) => {
      state.list = action.payload;
      state.loading = false;
    });
    builder.addCase(getUserWishes.pending, state => {
      state.loading = true;
    });
    builder.addCase(getUserWishes.rejected, state => {
      state.loading = false;
    });
  },
});

export const {appendNewWish, removeWish} = wishSlice.actions;
export default wishSlice.reducer;
