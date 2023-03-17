import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App'; 
import Apis from "./components/Apis";
import Cinene from "./components/Cinene";




ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/Noticias" element={<Apis />} />
            <Route path="/Cinene" element={<Cinene />} />
            <Route path="/salaCine" element={<salaCine />} />

        </Routes>
    </BrowserRouter>,
    document.getElementById("root")
);
