import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getStudentById, updateStudent } from "../../../redux/slice/student";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const ViewStudent = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [currentStudent, setCurrentStudent] = useState();
  const [isSaveDisable, setIsSaveDisable] = useState(true);
  const singleStudent = useSelector((state) => state.student.singleStudents);

  useEffect(() => {
    dispatch(
      getStudentById({
        id: params.id,
      })
    );
  }, [params]);

  useEffect(
    () => setCurrentStudent(JSON.parse(JSON.stringify(singleStudent))),
    [singleStudent]
  );

  const updateFields = (e) => {
    const { name, value } = e.target;

    if (currentStudent[name] === value) {
      setIsSaveDisable(true);
    } else {
      setIsSaveDisable(false);
    }
    setCurrentStudent((prev) => ({ ...prev, [name]: value }));
  };

  const onUpdate = () => {
    dispatch(
      updateStudent({
        data: currentStudent,
      })
    );
    setCurrentStudent({});
    onClose();
  };

  const onClose = () => {
    navigate("/student");
  };

  return (
    <Box component="form" sx={{ pb: 5 }}>
      <Typography>
        <h2>View Student Details</h2>
      </Typography>
      {currentStudent && Object.keys(currentStudent).length && (
        <Typography
          sx={{
            display: "flex",
            flexDirection: "column",
            width: { xs: "100%", sm: "100%", md: "40%", lg: "40%", xl: "40%" },
            gap: 5,
          }}
        >
          <TextField
            required
            id="outlined-required"
            name="first_name"
            label="First Name"
            onInput={updateFields}
            defaultValue={currentStudent?.first_name}
          />
          <TextField
            required
            id="outlined-required"
            name="last_name"
            label="Last Name"
            onInput={updateFields}
            defaultValue={currentStudent.last_name}
          />
        </Typography>
      )}
      <Typography
        sx={{
          display: "flex",
          mt: 5,
          gap: 3,
        }}
      >
        <Button
          variant="contained"
          sx={{ p: "10px 50px" }}
          disabled={isSaveDisable}
          onClick={onUpdate}
        >
          Update
        </Button>
        <Button variant="contained" sx={{ p: "10px 50px" }} onClick={onClose}>
          Close
        </Button>
      </Typography>
    </Box>
  );
};

export default ViewStudent;
