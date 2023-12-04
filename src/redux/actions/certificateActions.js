import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axios";
import { FETCH_CERTIFICATES } from "../actionTypes/certificateTypes";

export const fetchCertificates = createAsyncThunk(
  FETCH_CERTIFICATES,
  async () => {
    const response = await axiosInstance.get("/certificates");
    console.log(response.data)
    return response.data;
  }
);
