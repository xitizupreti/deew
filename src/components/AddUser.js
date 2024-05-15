import React from "react";

function AddUser() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div id="addForm">
              <form>
                <label for="inputPassword" class="col-sm-2">
                  UserName
                </label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    name="username"
                    class="form-control"
                    placeholder="UserName"
                  />
                </div>

                <label for="inputPassword" class="col-sm-2">
                  Email
                </label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    name="email"
                    class="form-control"
                    placeholder="Email"
                  />
                </div>

                <label for="inputPassword" class="col-sm-2">
                  Status
                </label>
                <div class="col-sm-10">
                  <select name="status" className="form_control">
                    <option value="">-Select Status-</option>
                    <option value="1">Active</option>
                    <option value="0">InActive</option>
                  </select>
                </div>

                <div>
                  <label for="inputPassword" class="col-sm-2"></label>
                  <div class="col-sm-10">
                    <button name="submit" className="btn btn-success">
                      Submit
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

export default AddUser;
