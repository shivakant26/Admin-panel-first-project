import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import AdminPanel from "../Component/AdminPanel/adminPanel";
import HomePage from "../Pages/HomePage";
const Navigation = () =>{
    return(
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />}/>
                    <Route path="/admin-panel" element={<AdminPanel />}/>
                </Routes>
            </Router>
        </div>
    )
}

export default Navigation;