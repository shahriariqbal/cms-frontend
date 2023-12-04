import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CertificateItem from "./certificateItem";
import { Table, TableBody } from "@mui/material";

test("renders certificate data and calls handleCertificateDelete when delete button is clicked", () => {
  const certificate = { id: 1, name: "Test Certificate" };
  const handleCertificateDelete = jest.fn();
  const { getByText, getByTestId } = render(
    <Table>
      <TableBody>
        <CertificateItem
          certificate={certificate}
          handleCertificateDelete={handleCertificateDelete}
        />
      </TableBody>
    </Table>
  );

  // Check that the certificate data is rendered
  expect(getByText("Test Certificate")).toBeInTheDocument();

  // Click the delete button
  fireEvent.click(getByTestId("delete-button"));

  // Check that handleCertificateDelete was called with the correct id
  expect(handleCertificateDelete).toHaveBeenCalledWith(1);
});
