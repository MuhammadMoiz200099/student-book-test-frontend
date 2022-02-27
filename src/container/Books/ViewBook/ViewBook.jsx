import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getBookByid } from "../../../redux/slice/book";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { updateBook } from "../../../redux/slice/book";

const ViewBook = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [currentBook, setCurrentBook] = useState();
  const [isSaveDisable, setIsSaveDisable] = useState(true);
  const singleBook = useSelector((state) => state.book.singleBook);

  useEffect(() => {
    dispatch(
      getBookByid({
        id: params.id,
      })
    );
  }, [params]);

  useEffect(
    () => setCurrentBook(JSON.parse(JSON.stringify(singleBook))),
    [singleBook]
  );

  const updateFields = (e) => {
    const { name, value } = e.target;

    if (currentBook[name] === value) {
      setIsSaveDisable(true);
    } else {
      setIsSaveDisable(false);
    }
    setCurrentBook((prev) => ({ ...prev, [name]: value }));
  };

  const onUpdate = () => {
    dispatch(
      updateBook({
        data: currentBook,
      })
    );
    onClose();
  };

  const onClose = () => {
    navigate("/book");
  };

  return (
    <Box component="form" sx={{ pb: 5 }}>
      <Typography>
        <h2>View Book Details</h2>
      </Typography>
      {currentBook && Object.keys(currentBook).length && (
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
            label="Book Name"
            name="book_name"
            onInput={updateFields}
            defaultValue={currentBook?.book_name}
          />
          <TextField
            required
            id="outlined-required"
            label="Author"
            name="author"
            onInput={updateFields}
            defaultValue={currentBook.author}
          />
          <TextField
            required
            id="outlined-required"
            label="Borrowed by"
            name="borrowed_by"
            onInput={updateFields}
            defaultValue={currentBook.borrowed_by}
          />
          <TextField
            required
            id="outlined-required"
            label="borrowed date"
            name="borrowed_date"
            onInput={updateFields}
            defaultValue={currentBook.borrowed_date}
          />
          <TextField
            required
            id="outlined-required"
            label="Returned Date"
            name="returned_date"
            onInput={updateFields}
            defaultValue={currentBook.returned_date}
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

export default ViewBook;
