import { Grid } from "@mui/material";
import "./App.css";
import CertificateForm from "./components/certificateForm";
import CertificateList from "./components/certificateList";
import { Typography } from "@mui/material";

function App() {
  return (
    <>
      <Grid container margin={5}>
        <Typography variant="h4" mb={3}>
          Certificate Management System
        </Typography>
        <CertificateList certificates={[{ id: 1, title: "cert" }]} />
      </Grid>
    </>
  );
}

export default App;
