import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Grid, Typography } from "@mui/material";
import CertificateForm from "./components/certificateForm";
import CertificateList from "./components/certificateList";

function App() {
  return (
    <Grid m={5} p={5}>
      <Typography variant="h4" mb={5} align="center" fontWeight="bold">
        Certificate Management System
      </Typography>
      <Router>
        <Routes>
          <Route path="/" element={<CertificateList />} />
          <Route path="/create" element={<CertificateForm />} />
        </Routes>
      </Router>
    </Grid>
  );
}

export default App;
