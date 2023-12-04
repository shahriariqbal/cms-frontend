import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axios";
import {
  FETCH_CERTIFICATES,
  DELETE_CERTIFICATE,
  CREATE_CERTIFICATE,
} from "../actionTypes/certificateTypes";

//get certificates
export const fetchCertificates = createAsyncThunk(
  FETCH_CERTIFICATES,
  async () => {
    const response = await axiosInstance.get("/certificates");
    console.log(response.data);
    return response.data;
  }
);

//remove certificate
export const deleteCertificate = createAsyncThunk(
  DELETE_CERTIFICATE,
  async (id) => {
    const response = await axiosInstance.delete(`/certificates/${id}`);
    return response;
  }
);

//create certificate
export const createCertificate = createAsyncThunk(
  CREATE_CERTIFICATE,
  async (data) => {
    const response = await axiosInstance.post("/certificates", data);
    console.log(response.data);
    return response.data;
  }
);
