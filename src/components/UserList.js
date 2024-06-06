import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";

function UserList() {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    const getUserData = async () => {
      const reqData = await fetch("http://localhost/deew/api/user.php");
      const resData = await reqData.json();
      console.log(resData);
      setUserData(resData);
    };
    getUserData();
  }, []);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12"></div>
          <h1>UserList</h1>
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
              {userData.map((uData, index) => (
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
                    <Link
                      to={"/edituser/" + uData.id}
                      className="btn btn-danger"
                    >
                      Delete
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default UserList;
