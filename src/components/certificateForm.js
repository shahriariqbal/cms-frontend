import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

function CertificateForm() {
  const [certificateData, setCertificateData] = useState({});

  const handleChange = (event) => {};

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField name="title" onChange={handleChange} required />
      <Button type="submit" variant="contained">
        Create Certificate
      </Button>
    </form>
  );
}

export default CertificateForm;
