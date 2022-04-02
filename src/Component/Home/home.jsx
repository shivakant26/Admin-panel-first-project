import React from "react";
import { Link } from "react-router-dom";

const Home = () =>{
    return(
        <div>
            <h1>Home Component</h1>
            <div>
                <button>
                    <Link to="/admin-panel">Admin Panel</Link>
                </button>
                <button>
                <Link to="/user-table">User Table</Link>
                </button>
            </div>
        </div>
    )
}

export default Home;