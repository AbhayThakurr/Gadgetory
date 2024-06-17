import React from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { db } from "../config/firebase";
import { getDoc, doc } from "firebase/firestore";

const SingleItem = () => {
  const { id } = useParams();

  const [singleData, setsingleData] = useState([]);
  useEffect(() => {
    const getSingleItem = async () => {
      const ref = doc(db, "items", id);
      await getDoc(ref).then((doc) => setsingleData(doc.data()));
    };
    getSingleItem();
  }, [id]);

  return (
    <div>
      <Navbar />

      <div className="container center author d-flex justify-content-center align-items-center g-5 my-3">
        <div className="img-fluid img-thumbnail">
          <img
            src={singleData.imgUrl}
            alt=""
            style={{ width: "60%", height: "10%" }}
          />
        </div>
        <div className="content center">
          <div className="author d-flex justify-content-center align-items-center">
            <img
              src={singleData.authorImg}
              alt=""
              style={{ width: "5%", borderRadius: "50%", margin: "1rem" }}
            />
            <h3>{singleData.authorName}</h3>
          </div>
          <div style={{ textAlign: "center" }}>
            <h1>{singleData.title}</h1>
            <h3>{singleData.shortDesc}</h3>
            <p>{singleData.longDesc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleItem;
