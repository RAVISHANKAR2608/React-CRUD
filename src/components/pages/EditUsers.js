import React, { useState } from 'react';
import { useNavigate , Link } from 'react-router-dom';

export default function EditUsers() {
    const navigate = useNavigate();
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
        category:'',
        commission:'',
        date:'',
        img:'',
        account:'',
        payment:''
    });

    const onInputChange = e => {
        setUser({...user,[e.target.name]:e.target.value});
    };

    const handleUpdate = (e) => {

        e.preventDefault();
        console.log(user,"Form data on Submit");
        if(user.name===''){
          alert("Please Enter Name")
        }else if(user.email===''){
          alert("Please enter Email Address")
        }else if(!validateEmail(user.email)){
          alert('Please Enter Valid Email')
        }else if(user.phone===''){
          alert('Please Enter Phone Number')
        }else if(user.contactName===''){
          alert("Please Enter Contact Name")
        }else if(user.contactEmail===''){
          alert("Please enter Email Address")
        }else if(!validateEmail(user.contactEmail)){
          alert('Please Enter Valid Email')
        }else if(user.contactPhone===''){
          alert('Please Enter Contact Phone Number')
        }else if(user.website===''){
          alert('Please Enter Website')
        }else if(!validateURL(user.website)){
          alert('Please Enter valid URL')
        }else if(user.notes===''){
          alert('Please Enter Notes')
        }else if(user.business===''){
          alert('Please Select Business Type')
        }else if(user.category===''){
          alert('Please Enter Category')
        }else if(user.commission===''){
          alert('Please Enter Commission Percentage')
        }else if(user.date===''){
          alert('Please Enter Date')
        }else if(user.payment===''){
          alert('Please Select Payment Options')
        }else{
            
            //console.log({ user : localStorage.getItem('editIndex') })
            let users = localStorage.getItem('users') && localStorage.getItem('users').length > 0 ? JSON.parse(localStorage.getItem('users')) : []

            const _users = users.map((data, index) => {
                if (index === localStorage.getItem('editIndex')) {
                    return { users }
                } else {
                    return user
                }
            })

            console.log(_users,"Users")
            localStorage.setItem('users', JSON.stringify(_users))
            navigate('/')
            
            setUser({
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
                payment:'',    
            })
    }}

    const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };
      
    const validateURL = (website) => {
        return String(website)
        .match(/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!]))?/);
    }

  return (
        <div className='bgImg'>
       <div className="container">
         <h1 className="header">New Business</h1>
          <form action="#">
              {/* <legend>Personal details</legend> */}
              <label htmlFor="name" className="head">Name <span style={{color:"orangeRed"}}><sup>*</sup></span></label><br />
              <input type="text" id="name" name="name" value={user.name} placeholder='Enter Your Name' onChange={e => onInputChange(e)} required /><br />
              <label htmlFor="email" className="head">Email <span style={{color:"orangeRed"}}><sup>*</sup></span></label><br />
              <input type="email" id="email" name="email" value={user.email} placeholder='Enter Your Email' onChange={e => onInputChange(e)} required /><br />
              <label htmlFor="phone" className="head">Phone <span style={{color:"orangeRed"}}><sup>*</sup></span></label><br />
              <input type="tel" id="phone" name="phone" value={user.phone} placeholder='Enter Your Phone Number' maxLength={10} onChange={e => onInputChange(e)} required /><br />
              <label htmlFor="website" className="head">Website <span style={{color:"orangeRed"}}><sup>*</sup></span></label><br />
              <input type="url" id="website" name="website" value={user.website} placeholder='Enter Your Website' onChange={e => onInputChange(e)} required/><br />
              <label htmlFor="contactName" className="head">Contact Name <span style={{color:"orangeRed"}}><sup>*</sup></span></label><br />
              <input type="text" id="contactName" name="contactName" value={user.contactName} placeholder='Enter Your Name' onChange={e => onInputChange(e)} required /><br />
              <label htmlFor="contactPhone" className="head">Contact Phone <span style={{color:"orangeRed"}}><sup>*</sup></span></label><br />
              <input type="tel" id="contactPhone" name="contactPhone" value={user.contactPhone} placeholder='Enter Your Phone Number' maxLength={10} onChange={e => onInputChange(e)} required /><br />
              <label htmlFor="contactEmail" className="head">Contact Email <span style={{color:"orangeRed"}}><sup>*</sup></span></label><br />
              <input type="email" id="contactEmail" name="contactEmail" value={user.contactEmail} placeholder='Enter Your Email' onChange={e => onInputChange(e)} required /><br />
              <label htmlFor="notes" className="head">Notes</label><br />
              <textarea id="notes" cols="45" rows="5" name="notes" value={user.notes} onChange={e => onInputChange(e)} required></textarea><br />

              <p className ="businessType" value={user.business}>Business Type <span style={{color:"orangeRed"}}><sup>*</sup></span> : {user.business} </p><br />
                  <input type="radio" name="business" id="small business" value="Small Business" onChange={e => onInputChange(e)} />
                  <label htmlFor="small business" className = "business">Small Business</label>
                  <input type="radio" name="business" id="enterprise" value="Enterprise" onChange={e => onInputChange(e)} />
                  <label htmlFor="enterprise" className = "business">Enterprise</label>
                  <input type="radio" name="business" id="entrepreneur" value="Entrepreneur" onChange={e => onInputChange(e)} />
                  <label htmlFor="entrepreneur" className = "business">Entrepreneur</label><br />

                <label htmlFor="category" className="head">Category <span style={{color:"orangeRed"}}><sup>*</sup></span> : {user.category} </label><br />
                    <select name="category" value={user.category} id="category" placeholder='Select Category' onChange={e => onInputChange(e)} required>
                        <option value="" disabled default hidden>Choose a Category</option>
                        <option name="category" value="Clothes">Clothes</option>
                        <option name="category" value="Toys">Toys</option>
                        <option name="category" value="Groceries">Groceries</option>
                        <option name="category" value="Electronics">Electronics</option>
                        <option name="category" value="Digital">Digital</option>
                    </select><br />

                <label htmlFor="commission" className="head">Commission Percentage <span style={{color:"orangeRed"}}><sup>*</sup></span></label>
                <input type="text" id="commission" name="commission" value={user.commission} placeholder="Enter Your Commission Percentage"  onChange={e => onInputChange(e)} required /><br />

                <label htmlFor="date" className="head">Active From <span style={{color:"orangeRed"}}><sup>*</sup></span></label>
                <input type="date" name="date" value={user.date} id="date" onChange={e => onInputChange(e)} required /><br />

                <label htmlFor="img" className="head">Select image <span style={{color:"orangeRed"}}><sup>*</sup></span></label>
                <input type="file" id="img" name="img" value={user.img} accept="image/*" onChange={e => onInputChange(e)} required /> <br />

                <p className="criticalAccount">Critical Account <span style={{color:"orangeRed"}}><sup>*</sup></span></p><br />
                    <input type="checkbox" name="account" value={user.account} id="account" onChange={e => onInputChange(e)} />
                    <label htmlFor="account" className="account">To represent whether the account is critical so that we can provide extra care in case of any queries. </label><br />

                <p className ="payOption">Payment Options <span style={{color:"orangeRed"}}><sup>*</sup></span> : {user.payment} </p><br />
                    <input type="radio" name="payment" id="COD" value="Cash on Delivery" onChange={e => onInputChange(e)} />
                    <label htmlFor="COD" className = "payment">Cash on Delivery</label>
                    <input type="radio" name="payment" id="UPI" value="UPI" onChange={e => onInputChange(e)} />
                    <label htmlFor="UPI" className = "payment">UPI</label>
                    <input type="radio" name="payment" id="Card Payment" value="Card Payment" onChange={e => onInputChange(e)} />
                    <label htmlFor="Card Payment" className = "payment">Card Payment</label><br /> 

                    {/* <Link to="/"><input type="submit" value="Submit" /></Link> */}
                    <button type="submit" className='submit' onClick={handleUpdate}>Update User</button>
                    {/* <button type="button" className="submit" onClick={!show?handleSubmit:updateData}>{!show?`Submit`:`Update`}</button> */}
                    {/* <input type="reset" value="Reset" /> */}
                    <Link to="../"><button className='cancel'>Cancel</button></Link>
          </form>
        </div>
    </div>
  )
}
