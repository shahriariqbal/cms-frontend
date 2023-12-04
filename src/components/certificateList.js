import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
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
import CertificateForm from "./certificateForm";
import { fetchCertificates } from "../redux/actions/certificateActions";

function CertificateList({ onDelete }) {
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
                onDelete={onDelete}
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
