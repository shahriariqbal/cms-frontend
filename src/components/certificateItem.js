import React from "react";
import { TableRow, TableCell, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function CertificateItem({ certificate, handleCertificateDelete }) {
  return (
    <TableRow>
      <TableCell>{certificate.id}</TableCell>
      <TableCell>{certificate.name}</TableCell>
      <TableCell>
        <IconButton onClick={() => handleCertificateDelete(certificate.id)}>
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
}
export default CertificateItem;
