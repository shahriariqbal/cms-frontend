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
} from "@mui/material";
import CertificateItem from "./certificateItem";
import {
  deleteCertificate,
  fetchCertificates,
} from "../redux/actions/certificateActions";

function CertificateList() {
  const dispatch = useDispatch();

  const certificates = useSelector((state) => state.certificates.entities);
  const loading = useSelector((state) => state.certificates.loading);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  useEffect(() => {
    dispatch(fetchCertificates());
  }, []);

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
    <>
      <Box display="flex" justifyContent="flex-end">
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

      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="right">Id</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Action</TableCell>
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
  );
}

export default CertificateList;
