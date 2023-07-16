import React, { useState , useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Users.css';

const Users = () => {

  const navigate = useNavigate();
  const [users,setUsers] = useState([]);
  /* const [user,setUser] = useState({
    name:'',
    email:'',
    phone:'',
    website:'',
    contactName:'',
    contactPhone:'',
    contactEmail:'',
    notes:'',
    business:'',
    category:'',
    commission:'',
    date:'',
    img:'',
    account:'',
    payment:''
}); */

  useEffect(()=>{
    const users = localStorage.getItem('users');
    if(users){
      setUsers(JSON.parse(users))
    }
  },[])

  /* const editUser = (i) => {
    console.log(i,"This Index is going to be Edit")
    //navigate(`./edit/${i}`)
    let userData = [...users][i];
    console.log(userData,"User Data on Edit");
    navigate('/update');
    setTimeout(()=>{
      let {name,email,phone,website,contactName,contactPhone,contactEmail,notes,business,category,commission,date,account,payment} = userData;
      setUser({name,email,phone,website,contactName,contactPhone,contactEmail,notes,business,category,commission,date,account,payment});
    },1000) 
  } */

  const deleteUser = (i) => {
      console.log(i,"This index row is going to be be Delete");
      let userData = [...users];
      userData.splice(i,1)
      setUsers(userData);
      localStorage.setItem("users",JSON.stringify(userData));
  }

  return (
      <div>
          <h1 className="header">New Business</h1>
          <div>
              {/* <Link to="./add"><button>Add User</button></Link> */}
              <button onClick={() => {
                  navigate('/add')
              }} className='addButton'>Add User</button>
          </div>
      <div className='table'>
          <table id='table'>
            <tbody>
              <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Website</th>
                {/* <th>Contact Name</th>
                <th>Contact Phone</th>
                <th>Contact Email</th>
                <th>Notes</th> */}
                <th>Business Type</th>
                {/* <th>Category</th>
                <th>Commission</th> */}
                <th>Active From</th>
                <th>Payment</th>
                <th>Actions</th>
              </tr>
  
              {
                users?.map((user,i) => {
                  return (
                    <tr key={i} >
                      <td>{i+1}</td>
                      <td>{user["name"]}</td>
                      <td>{user.email}</td>
                      <td>{user.phone}</td>
                      <td>{user.website}</td>
                      {/* <td>{user.contactName}</td>
                      <td>{user.contactPhone}</td>
                      <td>{user.contactEmail}</td>
                      <td>{user.notes}</td> */}
                      <td>{user.business}</td>
                      {/* <td>{user.category}</td>
                      <td>{user.commission}</td> */}
                      <td>{user.date}</td>
                      <td>{user.payment}</td>
                      <td>
                        <button onClick={() => navigate(`/edit/${i}`)} className="editButton">Edit</button>
                        <button onClick={() => deleteUser(i)} className="deleteButton">Delete</button>
                        <button onClick={() => navigate(`/view/${i}`)} className="viewButton">View</button>
                      </td>
                    </tr>
                  )
              })
              }
            </tbody>
          </table>
          </div>
      </div>
    )
}

export default Users;
