import axios from "axios";
import React, { useEffect, useState } from "react";

async function showImg() {
  return await axios
    .get("http://127.0.0.1:3009/showData")
    .then((data) => data)
    .catch((error) => {
      if (error.response) return error.response;
    });
}

export default function ShowData() {
  const [img, setImg] = useState([]);
  const [search, setSearch] = useState("");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    let displayImg = await showImg();
    setImg(displayImg.data.data);
  }, []);

  const handleSearch = (e) => {
    const keyworld = e.target.value;
    if (keyworld !== "") {
      const result = img.filter((img) => {
        return img.name.toLowerCase().startsWith(keyworld.toLowerCase());
      });
      setSearch(result);
    } else {
      setSearch(img);
    }
  };

  return (
    <div className="container pt-5">
      <div className="col-md-12 text-left">
        <p>ผลไม้</p>
      </div>
      <div className="col-md-12 text-end">
        <a href="/create" className="btn btn-success">
          เพิ่มผลไม้
        </a>
      </div>
      <div className="col-md-12 pt-2 text-end">
        <input placeholder="Search here" onChange={(e) => handleSearch(e)} />
      </div>
      <p className="pt-2 border-bottom">ชื่อผลไม้</p>
      {search && search.length > 0
        ? search.map((element, index) => (
            <div className="row border-bottom mt-2" key={index}>
              <div className="col-md-4">
                <p>{element.name}</p>
              </div>
              <div className="col-md-8">
                <img src={element.url} width="200px" alt={element.name} />
              </div>
            </div>
          ))
        : img.map((element, index) => (
            <div className="row border-bottom mt-2" key={index}>
              <div className="col-md-4">
                <p>{element.name}</p>
              </div>
              <div className="col-md-8">
                <img src={element.url} width="200px" alt={element.name} />
              </div>
            </div>
          ))}
    </div>
  );
}
