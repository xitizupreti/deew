import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditUser() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [formValue, setFormValue] = useState({
    username: "",
    email: "",
    status: "",
  });
  const [message, setMessage] = useState("");
  const handleInput = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    const userRowdata = async () => {
      const getUserdata = await fetch(
        "http://localhost/react-php/api/user.php/" + id
      );
      const resuserdata = await getUserdata.json();
      setFormValue(resuserdata);
    };
    userRowdata();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formValue);
    const formData = {
      id: id,
      username: formValue.username,
      email: formValue.email,
      status: formValue.status,
    };
    const res = await axios.put(
      "http://localhost/react-php/api/user.php",
      formData
    );
    if (res.data.success) {
      setMessage(res.data.success);
      setTimeout(() => {
        navigate("/userlist");
      }, 2000);
    }
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div id="addForm">
              <p className="text-success">{message}</p>
              <form onSubmit={handleSubmit}>
                <label htmlFor="username" className="col-sm-2">
                  UserName
                </label>
                <div className="col-sm-10">
                  <input
                    id="username"
                    type="text"
                    name="username"
                    value={formValue.username}
                    onChange={handleInput}
                    className="form-control"
                    placeholder="UserName"
                  />
                </div>

                <label htmlFor="email" className="col-sm-2">
                  Email
                </label>
                <div className="col-sm-10">
                  <input
                    id="email"
                    type="text"
                    name="email"
                    value={formValue.email}
                    onChange={handleInput}
                    className="form-control"
                    placeholder="Email"
                  />
                </div>

                <label className="col-sm-2">Status</label>
                <div className="col-sm-10">
                  <select
                    name="status"
                    value={formValue.status}
                    onChange={handleInput}
                    className="form_control"
                  >
                    <option value="">-Select Status-</option>
                    <option value="1">Active</option>
                    <option value="0">InActive</option>
                  </select>
                </div>

                <div>
                  <label className="col-sm-2"></label>
                  <div className="col-sm-10">
                    <button name="submit" className="btn btn-success">
                      Update
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditUser;
