import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateRoom(props) {
  const navigate = useNavigate();

  // const { createApi, handler } = props;
  // const [Getid, SetGetid] = useState();
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
  //state for handling input
  const [handle, setHandle] = useState(empty);

  // function for handle the input fields
  const handler = (e) => {
    const { name, value } = e.target;
    setHandle({ ...handle, [name]: value });
    console.log(handle);
  };

  // function for creating the Api data
  const createApi = () => {
    fetch("http://localhost:5000/room", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(handle),
    });
  };

  return (
    <div className="container">
      <h2 className="text-center display-3 mt-4">Add New Room</h2>

      <form className="w-50 m-auto"
        onSubmit={(e) => {
          e.preventDefault();
          createApi();
          navigate("/showroom");
        }}
      >
        <label className="mt-5">Enter roomNo</label>
        <input
          onChange={handler}
          required
          name="roomNo"
          type="number"
          className="form-control"
        />

        <label>Enter title</label>
        <input
          onChange={handler}
          required
          name="title"
          type="text"
          className="form-control"
        />

        <label>Enter floorNo</label>
        <input
          onChange={handler}
          required
          name="floorNo"
          type="number"
          className="form-control"
        />
        <label>Enter description</label>
        <input
          onChange={handler}
          required
          name="description"
          type="text"
          className="form-control"
        />
        <label>Enter rating</label>
        <input
          onChange={handler}
          required
          name="rating"
          type="number"
          className="form-control"
        />
        <label>Enter price</label>
        <input
          onChange={handler}
          required
          name="price"
          type="number"
          className="form-control"
        />
        <label>Enter roomCapacity</label>
        <input
          onChange={handler}
          required
          name="roomCapacity"
          type="number"
          className="form-control"
        />
        <label>Enter img</label>
        <input
          onChange={handler}
          required
          name="img"
          type="text"
          className="form-control"
        />

        <button className="btn btn-primary mt-3">Save Room</button>
      </form>
    </div>
  );
}

export default CreateRoom;
