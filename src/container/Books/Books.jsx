import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader/Loader";
import { getBook } from "../../redux/slice/book";
import { useNavigate } from "react-router-dom";

const Books = () => {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const books = useSelector((state) => state.book.books);

  useEffect(() => {
    dispatch(getBook());
  }, [dispatch]);

  const viewDetials = (id) => {
    navigation(`/book/${id}`);
  };

  return (
    <Box sx={{ mb: 10 }}>
      <Typography sx={{ pb: 1 }}>
        <h2>Books Record Table</h2>
      </Typography>
      <Typography>
        <p style={{ color: 'red' }}>
          *Note: Click on the table row to view / update the book record.
        </p>
      </Typography>
      {books && books.length ? (
        <Box>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }}>
              <TableHead>
                <TableRow>
                  <TableCell align="left"># S.no</TableCell>
                  <TableCell>Book Name</TableCell>
                  <TableCell>Author</TableCell>
                  <TableCell>Borrowed By</TableCell>
                  <TableCell>Borrowed Date</TableCell>
                  <TableCell>Return Date</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {books.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ cursor: "pointer" }}
                    onClick={() => viewDetials(row.id)}
                  >
                    <TableCell align="left">{row.id}</TableCell>
                    <TableCell>{row.book_name}</TableCell>
                    <TableCell>{row.author}</TableCell>
                    <TableCell>{row.borrowed_by}</TableCell>
                    <TableCell>{row.borrowed_date}</TableCell>
                    <TableCell>{row.returned_date}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      ) : (
        <Loader />
      )}
    </Box>
  );
};

export default Books;
