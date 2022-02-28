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
import { getStudents } from "../../redux/slice/student";
import Loader from "../../components/Loader/Loader";
import { useNavigate } from "react-router-dom";

const Student = () => {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const students = useSelector((state) => state.student.students);

  useEffect(() => {
    dispatch(getStudents());
  }, [dispatch]);

  const viewDetials = (id) => {
    navigation(`/student/${id}`);
  };

  return (
    <Box sx={{ mb: 10 }}>
      <Typography sx={{ pb: 1 }}>
        <h2>Student Record Table</h2>
      </Typography>
      <Typography>
        <p style={{ color: 'red' }}>
          *Note: Click on the table row to view / update the student record.
        </p>
      </Typography>
      {students && students.length ? (
        <Box>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }}>
              <TableHead>
                <TableRow>
                  <TableCell align="left"># S.no</TableCell>
                  <TableCell>First Name</TableCell>
                  <TableCell>Last Name</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {students.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ cursor: "pointer" }}
                    onClick={() => viewDetials(row.id)}
                  >
                    <TableCell align="left">{row.id}</TableCell>
                    <TableCell>{row.first_name}</TableCell>
                    <TableCell>{row.last_name}</TableCell>
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

export default Student;
