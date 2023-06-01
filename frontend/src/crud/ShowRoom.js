import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import roomImg from "./407091105.jpg";

function ShowRoom() {
  const empty = {
      roomNo: "",
      title: "",
      floorNo: "",
      description: "",
      rating: "",
      price: "",
      roomCapacity: "",
      img: "",
    };
  const [data, setData] = useState([]);
  const [Getid, SetGetid] = useState();
  const [handle, setHandle] = useState(empty);


  const editApi = async (id) => {
    var data = await fetch(`http://localhost:5000/room/${id}`);
    data = await data.json();
    console.log(data);
    setHandle(data);
    SetGetid(id);
  };
  const fetchApi = async () => {
    var value = await fetch("http://localhost:5000/room");
    value = await value.json();
    setData(value);
  };

  //function for deleting the data
  const delApi = async (id) => {
    // var data =
    await fetch(`http://localhost:5000/room/${id}`, {
      method: "DELETE",
    });
    // data = await data.json();
    fetchApi();
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className="container">
      <h2 className="text-center display-3">Show All Rooms</h2>

      <div className="row pt-2 pb-2">
        {data.map((item) => (
          <div className="col-lg-4 mt-4">
            <div className="card " style={{ width: "20rem" }}>
              <img className="card-img-top" src={roomImg} alt="Card cap" />
              <div className="card-body">
                <h5 className="card-title">roomNo: {item.roomNo}</h5>
                <p>title: {item.title}</p>
                <p>floor No: {item.floorNo}</p>
                <p>description: {item.description}</p>
                <p>rating: {item.rating}</p>
                <p>price: {item.price}</p>
                <p>roomCapacity: {item.roomCapacity}</p>
                <p>img: {item.img}</p>
                <hr />
                <div className="d-flex justify-content-around">
                  <Link to="/update">
                    <button
                      onClick={() => editApi(item._id)}
                      className="btn btn-primary"
                    >
                      Edit
                    </button>
                  </Link>
                  <button
                    onClick={() => delApi(item._id)}
                    className="btn btn-danger"
                  >
                    delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShowRoom;
