import Layout from "./components/Layout";
import Home from "./Home";
import Register from "./components/register";
import Login from "./components/Login";
// import Table from "./components/Table";
import ReactDOM from "react-dom/client";

import "./App.css";
import axios from "axios";

import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";

import { ChakraProvider, Table } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
 

  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="Login" element={<Login />} />
            <Route path="Register" element={<Register />} />
            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
{/* 
      <Login users={users} setUsers={setUsers} />

      <Register users={users} setUsers={setUsers} />

      <Tablex
        products={products}
        setProducts={setProducts}
        users={users}
        setUsers={setUsers}
      /> */}
    </ChakraProvider>
  );
}

export default App;
