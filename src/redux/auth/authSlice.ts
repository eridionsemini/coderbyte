import {createSlice} from '@reduxjs/toolkit';

type SliceState = {
  email: string;
  password: string;
  firstname: string;
  website: string;
  avatar: string;
};

const initialState: SliceState = {
  email: '',
  password: '',
  firstname: '',
  website: '',
  avatar: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    saveUserData: (state, action) => {
      state.email = action.payload.email;
      state.avatar = action.payload.avatar;
      state.password = action.payload.password;
      state.website = action.payload.website;
      state.firstname = action.payload.firstname;
    },
  },
});

export const {saveUserData} = authSlice.actions;
export default authSlice.reducer;
