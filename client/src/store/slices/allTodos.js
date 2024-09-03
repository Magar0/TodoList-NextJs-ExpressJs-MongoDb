const { createSlice } = require("@reduxjs/toolkit");

const allTodos = createSlice({
  name: "allTodos",
  initialState: [],
  reducers: {
    setAllTodos(state, action) {
      return action.payload;
    },
  },
});

export default allTodos.reducer;
export const { setAllTodos } = allTodos.actions;
