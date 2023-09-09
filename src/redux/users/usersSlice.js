import { createSlice } from '@reduxjs/toolkit';
import data from '../../data';

const initialState = {
  users: [],
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state) => {
      const allUsers = data.users;
      allUsers.map((user) => {
        const copy = { ...user };
        const index = allUsers.indexOf(copy);
        copy.id = index + 1;
        return copy;
      });
      return {
        ...state,
        users: allUsers,
      };
    },
  },
});

export const { setUsers } = usersSlice.actions;
export default usersSlice.reducer;
