import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import axios from "axios";

function UserList() {
  const [userData, setUserData] = useState([]);
  const [message, setMessage] = useState("");
  useEffect(() => {
    getUserData();
  }, []);
  const getUserData = async () => {
    const reqData = await fetch("http://localhost/react-php/api/user.php");
    const resData = await reqData.json();
    // console.log(resData);
    setUserData(resData);
  };
  const handleDelete = async (id) => {
    const res = await axios.delete(
      "http://localhost/react-php/api/user.php/" + id
    );
    setMessage(res.data.success);
    getUserData();
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12"></div>
          <h1>UserList</h1>
          <p className="text-danger">{message}</p>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>No.</th>
                <th>UserName</th>
                <th>Email</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {userData.length > 0 ? (
                userData.map((uData, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{uData.username}</td>
                    <td>{uData.email}</td>
                    <td>{uData.status === 1 ? "Active" : "InActive"}</td>
                    <td>
                      <Link
                        to={"/edituser/" + uData.id}
                        className="btn btn-success mx-2"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDelete(uData.id)}
                        className="btn btn-danger"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <t className="text-danger">No Data Found</t>
              )}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default UserList;
