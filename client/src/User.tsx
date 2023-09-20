import React, { useState , useEffect} from "react";
import {Link} from 'react-router-dom'
import axios from 'axios'

function User() {
  const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/')
        .then(result => setUsers(result.data))
        .catch(err => console.log(err))
    },[])
  
    const handleDelete = (id) => {
        axios.delete(`http://localhost:4000/deleteUser/${id}`)
        .then(res => {console.log(res)
        window.location.reload()})
        .catch(err => console.log(err))
    }
  return (
    <div className="container mx-auto mt-20">
      <div className="overflow-x-auto">
        <div className="flex justify-end mb-10">
        <Link to={'/create'} className="btn btn-success">Create Data</Link>
        </div>
        
        <table className="table ">
          {/* head */}
          <thead className="text-white">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>

              {users.map((items, index) => (
                <tr key={index}>
                  <td>{items.name}</td>
                  <td>{items.email}</td>
                  <td>{items.age}</td>
                  <td>
                  <Link to={`/update/${items._id}`} className="btn btn-success mx-4">Edit</Link>
                  <button className="btn btn-error" onClick={(e) => handleDelete(items._id)}>Delete</button>

                  </td>
                </tr>
              ))}

          </tbody>
        </table>
      </div>
    </div>
  );
}

export default User;
