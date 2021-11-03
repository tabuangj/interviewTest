import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
async function saveData(dataTosave) {
  return await axios
    .post("http://127.0.0.1:3009/addData", {
      name: dataTosave.name,
      url: dataTosave.url,
    })
    .then((data) => data)
    .catch((error) => {
      if (error.response) return error.response;
    });
}
export default function AddData() {
  const [name, setName] = useState();
  const [url, setUrl] = useState();
  const handleSave = async (e) => {
    e.preventDefault();
    await saveData({ name, url });
    window.location = "/";
  };
  return (
    <div className="container pt-5 mt-5">
      <form onSubmit={handleSave}>
        <div className="row">
          <h2>หน้าเพิ่มสินค้า</h2>
          <p>create</p>
          <div className="col-md-12 text-center ">
            <label>Name :</label>
            <input type="text" onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="col-md-12 text-center ">
            <label>Photo :</label>
            <input type="text" onChange={(e) => setUrl(e.target.value)} />
          </div>
          <div className="col-md-12 pt-3 text-center ">
            <button type="submit" className="btn btn-success">
              submit
            </button>
            <a href="/" className="btn btn-light">
              cancel
            </a>
          </div>
        </div>
      </form>
    </div>
  );
}
