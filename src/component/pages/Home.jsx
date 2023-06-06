import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get("http://localhost:3001/users")
    setUsers(result.data);
  }

  const deleteUser = async id => {
    await axios.delete(`http://localhost:3001/users/${id}`);
    loadUser();
  }

  return (
    <>
      <div className="container">
        <h1>home page</h1>
        <table className="table">
          <thead>
            <tr className='bg-dark text-white'>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user, index) => (
                <tr key={index} >
                  <th scope='row'>{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>
                    <Link className='btn btn-primary me-2' to={`/user/${user.id}`} ><i className="fa-solid fa-eye"></i></Link>
                    <Link className='btn btn-outline-primary me-2' to={`/user/edit/${user.id}`} ><i className="fa-solid fa-pencil"></i></Link>
                    <Link className='btn btn-danger' onClick={() => deleteUser(user.id)} ><i className="fa-solid fa-trash"></i></Link>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Home