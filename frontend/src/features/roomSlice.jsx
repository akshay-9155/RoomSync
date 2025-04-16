import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rooms: [],
  selectedRoom: null,
  loading: false,
};

const roomSlice = createSlice({
  name: "rooms",
  initialState,
  reducers: {
    setRooms: (state, action) => {
      state.rooms = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setSelectedRoom: (state, action) => {
      state.selectedRoom = action.payload;
    },
  },
});

export const { setRooms, setLoading } = roomSlice.actions;
export default roomSlice.reducer;
