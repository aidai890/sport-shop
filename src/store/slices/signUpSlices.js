import { createSlice } from '@reduxjs/toolkit';

const signUpSlice = createSlice({
  name: 'signUp',
  initialState: {
    userData: {},
    load: false,
    error: ''
  },
  reducers: {
    createUser(state, action) {
      state.userData = action.payload;
      localStorage.setItem('auth', JSON.stringify(state.userData));
    },
    getFromLS(state){
        const user=JSON.parse(localStorage.getItem("auth"))
        if(user)
        state.userData=user;
    },
    signOut(){}
  }
});

export const { createUser,getFromLS } = signUpSlice.actions;

export default signUpSlice.reducer;
