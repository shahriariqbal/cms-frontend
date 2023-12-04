import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Grid } from "@mui/material";
import "./App.css";
import CertificateForm from "./components/certificateForm";
import CertificateList from "./components/certificateList";
import { Typography } from "@mui/material";

function App() {
  return (
    <Grid m={5} p={5}>
      <Typography variant="h4" mb={3}>
        Certificate Management System
      </Typography>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <CertificateList certificates={[{ id: 1, title: "cert" }]} />
            }
          />
          <Route path="/create" element={<CertificateForm />} />
        </Routes>
      </Router>
    </Grid>
  );
}

export default App;
