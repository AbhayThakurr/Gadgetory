import React from "react";
import { useState } from "react";
import Navbar from "./Navbar";
import { getAuth } from "firebase/auth";
import { db } from "../config/firebase";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const AddItem = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const [data, setData] = useState({
    title: "",
    shortDesc: "",
    logDesc: "",
    imgUrl: "",
    authorName: auth.currentUser.displayName,
    authorImg: auth.currentUser.photoURL,
  });
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const formRef = collection(db, "items");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDoc(formRef, data);

    setData({
      title: "",
      shortDesc: "",
      logDesc: "",
      imgUrl: "",
    });

    navigate("/items");
  };

  return (
    <>
      <Navbar />

      <div className="container my-3" style={{ padding: "2rem", width: "50%" }}>
        <form onSubmit={handleSubmit}>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Title
            </label>
            <input
              value={data.title}
              name="title"
              type="text"
              required
              onChange={handleChange}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>

          <div class="mb-3">
            <label for="text" class="form-label">
              Short Description
            </label>
            <input
              value={data.shortDesc}
              name="shortDesc"
              type="text"
              required
              onChange={handleChange}
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">
              Full Desciption
            </label>
            <textarea
              value={data.logDesc}
              name="logDesc"
              required
              onChange={handleChange}
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>

          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              imge Url
            </label>
            <input
              value={data.imgUrl}
              name="imgUrl"
              type="text"
              required
              onChange={handleChange}
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <div className="mb-3">
            <button type="submit" class="btn btn-primary btn-lg">
              Add Blog
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddItem;
