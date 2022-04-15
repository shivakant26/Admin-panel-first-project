import React, { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { Link } from "react-router-dom";
import Action from "../Action/action";
import AdminPanel from "../AdminPanel/adminPanel";
import BusinessEntity from "../Business Entity/businessEntity";
import Role from "../Role/role";
import LineofBusiness from "../LineofBusiness/lineOfBusiness";
import GroupRoleLink from "../GroupRoleLink/groupRoleLink";
import  GroupTable from "../GroupTable/groupTable"

const Home = () => {
    const [key, setKey] = useState('admin');
    return (
        <div className="tabs-section">
            {/* <h1>Home Component</h1> */}
            {/* <div className="link-group">
            <span className="admin-panel">
                <Link to="/admin-panel">Admin Panel</Link>
            </span>
            <span className="user-table">
                <Link to="/user-table">User Table</Link>
            </span>
            <span className="role-table">
                <Link to="/role">Role</Link>
            </span>
            <span className="role-table">
                <Link to="/action">Action</Link>
            </span>
            </div> */}
            <Tabs
                id="controlled-tab-example"
                transition={true}
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="tabs-wrapper"
            >
                <Tab eventKey="admin" title="User Panel">
                    <AdminPanel />
                </Tab>
                <Tab eventKey="Role" title="Role">
                    <Role />
                </Tab>
                <Tab eventKey="line" title="Line of Business">
                    <LineofBusiness/>
                </Tab>
                <Tab eventKey="Action" title="Action">
                    <Action />
                </Tab>
                <Tab eventKey="Business" title="Business Entity">
                    <BusinessEntity />
                </Tab>
                <Tab eventKey="GroupRoleLink" title="Group Role Link">
                    <GroupRoleLink />
                </Tab>
                <Tab eventKey="group" title="Group Table">
                    <GroupTable />
                </Tab>
            </Tabs>
        </div>
    )
}

export default Home;

