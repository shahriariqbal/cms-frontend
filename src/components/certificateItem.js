import React from "react";
import { TableRow, TableCell, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function CertificateItem({ certificate, handleCertificateDelete }) {
  return (
    <TableRow>
      <TableCell align="center">{certificate.id}</TableCell>
      <TableCell align="center">{certificate.name}</TableCell>
      <TableCell align="center">
        <IconButton
          data-testid="delete-button"
          color="error"
          onClick={() => handleCertificateDelete(certificate.id)}
        >
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
}
export default CertificateItem;
