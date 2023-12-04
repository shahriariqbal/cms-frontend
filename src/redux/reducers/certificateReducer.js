import { createSlice } from "@reduxjs/toolkit";
import { fetchCertificates } from "../actions/certificateActions";

export const certificatesSlice = createSlice({
  name: "certificates",
  initialState: { entities: [], loading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCertificates.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCertificates.fulfilled, (state, action) => {
      state.entities = action.payload;
      state.loading = false;
    });
  },
});

export default certificatesSlice.reducer;
