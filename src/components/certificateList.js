import React from 'react';
import { Grid } from '@mui/material';
import CertificateItem from './certificateItem';

function CertificateList({ certificates, onDelete }) {
  return (
    <Grid container spacing={2}>
      {certificates.map((certificate) => (
        <Grid item xs={12} sm={6} md={4} key={certificate.id}>
          <CertificateItem
            certificate={certificate}
            onDelete={onDelete}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default CertificateList;