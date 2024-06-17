import Navbar from "./Navbar";
import { getAuth } from "firebase/auth";
import { db } from "../config/firebase";
import { onSnapshot, collection, doc, deleteDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Items = () => {
  const auth = getAuth();
  const collRef = collection(db, "items");
  const [allItems, setAllItems] = useState([]);

  useEffect(() => {
    const getdata = async () => {
      await onSnapshot(collRef, (snapshot) => {
        setAllItems(
          snapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }))
        );
      });
    };

    getdata();
    console.log(allItems);
  }, []);

  const deleteItem = async (id) => {
    const data = doc(db, "items", id);
    await deleteDoc(data);
  };

  return (
    <>
      <Navbar />
      <div
        style={{ marginTop: "1rem", textAlign: "center", minHeight: "100vh" }}
      >
        {allItems.map((data) => {
          return (
            <>
              <div className="container  my-3 ">
                <div className="d-flex justify-content-center align-item-center flex-column ">
                  <div
                    className="author d-flex justify-content-center align-items-center"
                    style={{
                      width: "60%",
                    }}
                  >
                    <img
                      src={data.authorImg}
                      alt="author"
                      style={{
                        width: "4%",
                        borderRadius: "50%",
                        margin: "1rem",
                      }}
                    />
                    <h3>{data.authorName}</h3>
                  </div>
                  <div className="d-flex justify-content-center align-item-center">
                    <div
                      className="card center bg-secondary"
                      style={{
                        width: "70%",
                        alignItems: "center",
                        color: "white",
                      }}
                    >
                      <div className="row ">
                        <div className="col-md-4 d-flex justify-content-center align-item-center">
                          <img
                            src={data.imgUrl}
                            className="img-fluid rounded-start"
                            alt="..."
                            style={{
                              width: "60%",
                            }}
                          />
                        </div>
                        <div className="col-md-8">
                          <div className="card-body">
                            <h2 className="card-title">{data.title}</h2>
                            <h5 className="card-text">{data.shortDesc}</h5>
                            <h5 className="">
                              <small className="text-warning">
                                Last updated 3 mins ago
                              </small>
                            </h5>
                            <Link
                              className="btn btn-primary"
                              to={`/Items/${data.id}`}
                            >
                              View More
                            </Link>
                            <button
                              className="btn btn-danger mx-3"
                              onClick={() => deleteItem(data.id)}
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Items;
