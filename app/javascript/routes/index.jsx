import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AddressBook from "../components/AddressBook";
import Create from "../components/Create";

export default (
  <Router>
    <Routes>
      <Route path="/" element={<AddressBook />} />
      <Route path="/create" element={<Create />} />
    </Routes>
  </Router>
);
