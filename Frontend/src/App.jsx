import { Route } from 'react-router-dom';
import './App.css'
import Blogs from './components/Blogs'
import CourseSyllabus from './components/CourseSyllabus'

import { BrowserRouter as Router, Routes } from "react-router-dom";



function App() {


  return (
    <Router>
      <Routes>
        <Route path='/' element = {<CourseSyllabus />} />
        <Route path='/blogs' element={<Blogs />} />
      </Routes>
    </Router>
  )
}

export default App
