import {createAsyncThunk, createSlice, Dispatch} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from '../instance';
import {getUserWishes} from '../wish/wishSlice';

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

type LoginData = {
  access_token: string;
  refresh_token: string;
};

type RegisterData = {
  access_token: string;
  refresh_token: string;
};

export type UserUpdateAttributes = {
  id: number;
  email: string;
  firstname: string;
  lastname: string;
};

type MyKnownError = {
  error: string;
};

export type UserLoginAttributes = {
  email: string;
  password: string;
};

export type UserRegisterAttributes = {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
};

type User = {
  id: number;
  createdAt: string;
  updatedAt: string;
  email: string;
  hashedRt: null | string;
  firstname: string;
  lastname: string;
};

type SliceState = {
  token: null | string;
  refreshToken: null | string;
  user: null | User;
};

type UpdateUserBody = {
  email: string;
  firstname: string;
  lastname: string;
};

export const login = createAsyncThunk<
  LoginData,
  UserLoginAttributes,
  AsyncThunkConfig
>('user/login', async (user, thunkAPI) => {
  const {email, password} = user;
  const req = '/auth/login';
  const body = {
    email,
    password,
  };

  try {
    const res = (await axios.post(req, body)) as LoginData;
    await AsyncStorage.setItem('token', res.access_token);
    await thunkAPI.dispatch(getUserWishes({name: ''}));
    return res;
  } catch (e: any) {
    toast.show(e.response.data.message, {type: 'danger'});
    console.log('error from login', e);
    return thunkAPI.rejectWithValue({error: e.mesaage} as MyKnownError);
  }
});

export const register = createAsyncThunk<
  RegisterData,
  UserRegisterAttributes,
  AsyncThunkConfig
>('user/register', async (user, thunkAPI) => {
  const {email, password, firstname, lastname} = user;
  const req = '/auth/signup';
  const body = {
    email,
    password,
    firstname,
    lastname,
  };
  try {
    const res = (await axios.post(req, body)) as RegisterData;
    await AsyncStorage.setItem('token', res.access_token);
    toast.show(`Welcome to Pokedex ${firstname} `, {type: 'success'});
    return res;
  } catch (e: any) {
    toast.show('Error during registration', {type: 'danger'});
    return thunkAPI.rejectWithValue({error: e.message} as MyKnownError);
  }
});

export const logout = createAsyncThunk<boolean, {}, AsyncThunkConfig>(
  'user/logout',
  async () => {
    const req = '/auth/logout';
    try {
      await axios.post(req);
      await AsyncStorage.removeItem('token');
      return true;
    } catch (e) {
      return false;
    }
  },
);

export const getCurrentUser = createAsyncThunk<User, {}, AsyncThunkConfig>(
  'user/getMe',
  async (data, thunkAPI) => {
    const req = '/users/me';
    try {
      return (await axios.get(req)) as User;
    } catch (e: any) {
      console.log('err', e);
      return thunkAPI.rejectWithValue({error: e.message} as MyKnownError);
    }
  },
);

export const updateUser = createAsyncThunk<
  User,
  UserUpdateAttributes,
  AsyncThunkConfig
>('user/update', async (user, thunkAPI) => {
  const {id, email, firstname, lastname} = user;
  const req = `/users/${id}`;
  const body: UpdateUserBody = {
    email,
    firstname,
    lastname,
  };
  try {
    toast.show('User updated', {type: 'success'});
    return (await axios.put(req, body)) as User;
  } catch (e: any) {
    return thunkAPI.rejectWithValue({error: e.message} as MyKnownError);
  }
});

const userSlice = createSlice({
  name: 'userSlice',
  initialState: {
    token: null,
    refreshToken: null,
    user: null,
  } as SliceState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.token = action.payload.access_token;
      state.refreshToken = action.payload.access_token;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.token = action.payload.access_token;
      state.refreshToken = action.payload.access_token;
    });
    builder.addCase(getCurrentUser.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});

export default userSlice.reducer;
