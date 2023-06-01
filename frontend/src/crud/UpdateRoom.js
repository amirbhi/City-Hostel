import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function UpdateRoom() {
  const navigate = useNavigate();
  const [Getid, SetGetid] = useState();
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
  // //state for handling input
  const [handle, setHandle] = useState(empty);

  // function for handle the input fields
  const handler = (e) => {
    const { name, value } = e.target;
    setHandle({ ...handle, [name]: value });
    console.log(handle);
  };
  // function for updating the Api
  const updateApi = () => {
    fetch(`http://localhost:5000/room/${Getid}`, {
      method: "PUT",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(handle),
    });
  };
  return (
    <div className="container">
      <h2 className="text-center display-3">Edit Your Room</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          updateApi();
          navigate("/showroom");
        }}
      >
        <label className="mt-5">Enter roomNo</label>
        <input
          value={handle.roomNo}
          onChange={handler}
          required
          name="roomNo"
          type="number"
          className="form-control"
        />

        <label>Enter title</label>
        <input
          value={handle.title}
          onChange={handler}
          required
          name="title"
          type="text"
          className="form-control"
        />

        <label>Enter floorNo</label>
        <input
          value={handle.floorNo}
          onChange={handler}
          required
          name="floorNo"
          type="number"
          className="form-control"
        />
        <label>Enter description</label>
        <input
          value={handle.description}
          onChange={handler}
          required
          name="description"
          type="text"
          className="form-control"
        />
        <label>Enter rating</label>
        <input
          value={handle.rating}
          onChange={handler}
          required
          name="rating"
          type="number"
          className="form-control"
        />
        <label>Enter price</label>
        <input
          value={handle.price}
          onChange={handler}
          required
          name="price"
          type="number"
          className="form-control"
        />
        <label>Enter roomCapacity</label>
        <input
          value={handle.roomCapacity}
          onChange={handler}
          required
          name="roomCapacity"
          type="number"
          className="form-control"
        />
        <label>Enter img</label>
        <input
          value={handle.img}
          onChange={handler}
          required
          name="img"
          type="text"
          className="form-control"
        />

        <button className="btn btn-primary mt-3">Update Room</button>
      </form>
    </div>
  );
}

export default UpdateRoom;
