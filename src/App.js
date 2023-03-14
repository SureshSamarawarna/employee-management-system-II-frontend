import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css"
import AddEmployee from "./components/AddEmployee"
import EmployeeList from "./components/EmployeeList";
import Navbar from "./components/Navbar"

export default function App() {
  return (
  <>
  <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
      <Route index element={<EmployeeList />}></Route>
      <Route path="/" element={<EmployeeList />}></Route>
      <Route path="/employeeList" element={<EmployeeList />}></Route>
      <Route path="/addEmployee" element={<AddEmployee/>}></Route>
    </Routes>
  </BrowserRouter>
    
  </>
  );
}