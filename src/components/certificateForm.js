import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Grid } from "@mui/material";
import Swal from "sweetalert2";
import { createCertificate } from "../redux/actions/certificateActions";

function CertificateForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [certificateData, setCertificateData] = useState({
    name: "",
    data: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCertificateData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(certificateData);
    dispatch(createCertificate(certificateData));
    Swal.fire("Success!", "Your certificate has been created.", "success").then(
      () => {
        navigate("/");
      }
    );
  };
  console.log(certificateData);
  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            name="name"
            label="Name"
            variant="outlined"
            fullWidth
            value={certificateData.name}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="data"
            label="Description"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            value={certificateData.description}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Create Certificate
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default CertificateForm;
