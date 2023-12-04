import React from 'react';
import { Card, CardContent, Typography, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function CertificateItem({ certificate, onDelete }) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{certificate.title}</Typography>
        <IconButton onClick={() => onDelete(certificate.id)}>
          <DeleteIcon />
        </IconButton>
      </CardContent>
    </Card>
  );
}

export default CertificateItem