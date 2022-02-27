import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from '../../container/Home/Home';
import Student from '../../container/Student/Student';
import ViewStudent from '../../container/Student/ViewStudent/ViewStudent';
import Books from '../../container/Books/Books';
import ViewBook from '../../container/Books/ViewBook/ViewBook';

const Navigation = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/student' element={<Student />} />
            <Route path='/student/:id' element={<ViewStudent />} />
            <Route path='/book' element={<Books />} />
            <Route path='/book/:id' element={<ViewBook />} />
        </Routes>
    </>
  )
}

export default Navigation