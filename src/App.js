import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Grid } from "@mui/material";
import "./App.css";
import CertificateForm from "./components/certificateForm";
import CertificateList from "./components/certificateList";
import { Typography } from "@mui/material";

function App() {
  return (
    <Grid m={5} p={5}>
      <Typography variant="h4" mb={5} align="center" fontWeight="bold">
        Certificate Management System
      </Typography>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <CertificateList />
            }
          />
          <Route path="/create" element={<CertificateForm />} />
        </Routes>
      </Router>
    </Grid>
  );
}

export default App;
