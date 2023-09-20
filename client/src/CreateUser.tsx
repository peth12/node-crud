import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateUser() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [age, setAge] = useState();
  const navigate = useNavigate();

  const Submit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/createUser", {
        name,
        email,
        age,
      })
      .then((result) => {
        console.log(result);
        navigate('/')
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="max-w-[500px] mx-auto mt-20">
      <div className="card bg-neutral text-neutral-content">
        <div className="card-body">
          <h2 className="card-title text-start text-white text-[50px]">
            Add User
          </h2>
          <form onSubmit={Submit} className="text-white">
            <div className="form-control w-full max-w-md pt-10">
              <label className="label">
                <span className="label-text text-white text-[20px] font-bold">
                  Name :{" "}
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter Name"
                className="input input-bordered w-full max-w-md"
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

export default CreateUser;
