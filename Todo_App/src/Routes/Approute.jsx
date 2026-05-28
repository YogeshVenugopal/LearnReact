import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../Components/Layout';
import Dashboard from '../Pages/Dashboard';

function Approute() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout/>}>
            <Route path='/' element={<Dashboard/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default Approute
