import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  TablePagination,
  Button,
  Box,
  Typography,
} from "@mui/material";
import CertificateItem from "./certificateItem";
import {
  deleteCertificate,
  fetchCertificates,
} from "../redux/actions/certificateActions";

function CertificateList() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  useEffect(() => {
    dispatch(fetchCertificates());
  }, []);

  const certificates = useSelector((state) => state.certificates.entities);
  // const loading = useSelector((state) => state.certificates.loading);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const handleCertificateDelete = (id) => {
    Swal.fire({
      title: "Confirmation",
      text: "Do you really want to remove this certificate?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteCertificate(id)).then((res) => {
          if (!res.hasOwnProperty("error")) {
            dispatch(fetchCertificates());
            Swal.fire(
              "Deleted!",
              "Your certificate has been deleted.",
              "success"
            );
          }
        });
      }
    });
  };

  return (
    <Box mx={4} pt={4}>
      <Box display="flex" justifyContent="space-between" mb={3}>
        <Typography variant="h6" fontWeight="bold">
          Certificate List
        </Typography>
        <Button
          size="small"
          posi
          variant="contained"
          mb={3}
          component={Link}
          to="/create"
        >
          Add Certificate
        </Button>
      </Box>
      {certificates.length > 0 ? (
        <>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell align="center">
                  <Typography variant="body1" fontWeight="bold">
                    Id
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography variant="body1" fontWeight="bold">
                    Name
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography variant="body1" fontWeight="bold">
                    Action
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {certificates
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((certificate) => (
                  <CertificateItem
                    key={certificate.id}
                    certificate={certificate}
                    handleCertificateDelete={handleCertificateDelete}
                  />
                ))}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={certificates.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </>
      ) : (
        <Typography variant="body1" m={3} textAlign="center">
          No certificate is available, please add a certificate.
        </Typography>
      )}
    </Box>
  );
}

export default CertificateList;
