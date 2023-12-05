import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Grid, Box, Typography } from "@mui/material";
import Swal from "sweetalert2";
import { createCertificate } from "../redux/actions/certificateActions";

function CertificateForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // State to manage form input values
  const [certificateData, setCertificateData] = useState({
    name: "",
    data: "",
  });

  // Function to handle changes in form inputs
  const handleChange = (event) => {
    const { name, value } = event.target;
    setCertificateData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Dispatch action to create a certificate
    dispatch(createCertificate(certificateData));
    Swal.fire("Success!", "Your certificate has been created.", "success").then(
      () => {
        navigate("/");
      }
    );
  };
  return (
    <>
      <Box display="flex" justifyContent="flex-start" mb={3}>
        <Button size="small" posi variant="outlined" component={Link} to="/">
          Go Back
        </Button>
        <Typography variant="h6" fontWeight="bold" ml={2}>
          Create Certificate
        </Typography>
      </Box>
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
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
}

export default CertificateForm;
