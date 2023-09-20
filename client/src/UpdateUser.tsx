import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function UpdateUser() {
  const { id } = useParams();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [age, setAge] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:4000/getUserById/${id}`)
      .then((result) => {
        console.log(result.data);
        setName(result.data.name);
        setEmail(result.data.email);
        setAge(result.data.age);
      })
      .catch((err) => console.log(err));
  }, []);

  const Update = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:4000/updateUser/${id}`, {
        name,
        email,
        age,
      })
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="max-w-[500px] mx-auto mt-20">
      <div className="card bg-neutral text-neutral-content">
        <div className="card-body">
          <h2 className="card-title text-start text-white text-[50px]">
            Update User
          </h2>
          <form onSubmit={Update} className="text-white">
            <div className="form-control w-full max-w-md pt-10">
              <label className="label">
                <span className="label-text text-white text-[20px] font-bold">
                  Name :
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter Name"
                className="input input-bordered w-full max-w-md"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-control w-full max-w-md pt-10">
              <label className="label">
                <span className="label-text text-white text-[20px] font-bold">
                  Email :
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter Email"
                className="input input-bordered w-full max-w-md"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-control w-full max-w-md pt-10">
              <label className="label">
                <span className="label-text text-white text-[20px] font-bold">
                  Age
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter Age"
                className="input input-bordered w-full max-w-md"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <div className="card-actions pt-6">
              <button className="btn btn-success font-bold">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateUser;
