import { createSlice } from '@reduxjs/toolkit';
import { users } from '../db.json';

const initialState = {
  users: [],
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state) => {
      const allUsers = users.map((user) => {
        const copy = { ...user };
        const index = users.indexOf(copy);
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
