import React, { useState } from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Action from "../Component/Action/action";
import AdminPanel from "../Component/AdminPanel/adminPanel";
import Role from "../Component/Role/role";
import HomePage from "../Pages/HomePage";


const Navigation = () =>{
    return(
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />}/>
                    <Route path="/admin-panel" element={<AdminPanel />}/>
                    <Route path="/role" element={<Role />}/>
                    <Route path="/action" element={<Action />}/>
                </Routes>
            </Router>
        </div>
    )
}

export default Navigation;