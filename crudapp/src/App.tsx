import React from 'react';

import './StudentForm/form.scss';
import StudentForm from './StudentForm/StudentForm';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import View from './View/View';
import Viewdata from './Viewdata/Viewdata';
function App() {
  return (
    <>
    <BrowserRouter>
    {/* <Link to="/View">view</Link> */}
    <Routes>
      <Route path="/" element={<View/>}/>
      <Route path="/View" element={<View/>}/>
      <Route path="/view/:id" element={<Viewdata/>}/>
      <Route path="/create" element={<StudentForm/>}/>
      <Route path="/update/:id" element={<StudentForm/>}/>
      {/* <Route path="/View" element={<StudentForm/>}/> */}
    </Routes>
  
   </BrowserRouter>
   </>
  );
}

export default App;
