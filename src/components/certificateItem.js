import React from "react";
import { TableRow, TableCell, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function CertificateItem({ certificate, onDelete }) {
  return (
    <TableRow>
      <TableCell>{certificate.id}</TableCell>
      <TableCell>{certificate.name}</TableCell>
      <TableCell>
        <IconButton onClick={() => onDelete(certificate.id)}>
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
}
export default CertificateItem;
