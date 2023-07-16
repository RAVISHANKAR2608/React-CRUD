import React, { useState, useEffect } from 'react'
import { useNavigate , useParams } from 'react-router-dom';
import '../styles/viewUser.css';

export default function ViewUser() {
  const [user,setUser] = useState({
    name:'',
    email:'',
    phone:'',
    website:'',
    contactName:'',
    contactPhone:'',
    contactEmail:'',
    notes:'',
    business:'',
    category:[''],
    commission:'',
    date:'',
    img:'',
    account:'',
    payment:''
});

  const navigate = useNavigate();

  const { i } = useParams();
  /* let data =user.category;
  let categories = [...new Set(data)]
  let category = categories.toString(); */

  useEffect(()=>{
    const users = JSON.parse(localStorage.getItem('users'));
    // console.log(users[i],"users")
    if(users){
      setUser(users[i])
    }
  },[i])


  return (
    <div>
      {/* <Link to="/" className='link'>Back to Home</Link> */}
      <button onClick={()=>navigate('/')} className='backButton'>Back to Home</button>

      <h1 className='index'>User Index : {i} </h1>
      <hr /><hr />
      <ul>
        <li>Name : {user.name}</li>
        <li>Email : {user.email}</li>
        <li>Phone : {user.phone}</li>
        <li>Website : {user.website}</li>
        <li>Contact Name : {user.contactName}</li>
        <li>Contact Phone : {user.contactPhone}</li>
        <li>Contact Email : {user.contactEmail}</li>
        <li>Notes : {user.notes}</li>
        <li>Business : {user.business}</li>
        <li>Category : {user.category.toString()}</li> 
        {/* <li>Category : {category}</li> */}
        <li>Commission : {user.commission}</li>
        <li>Date : {user.date}</li>
        {/* <li>Image : {user.img}</li> */}
        <li>Account  : {user.account.toString().toUpperCase()}</li>
        <li>Payment : {user.payment}</li>
      </ul>
    </div>
  );
};
