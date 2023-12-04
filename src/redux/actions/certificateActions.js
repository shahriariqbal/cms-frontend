import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { FETCH_CERTIFICATES } from "../actionTypes/certificateTypes";

export const fetchCertificates = createAsyncThunk(
  FETCH_CERTIFICATES,
  async () => {
    const response = await axios.get("/certificates");
    return response.data;
  }
);
