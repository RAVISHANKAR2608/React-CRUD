import React, { useState, useEffect } from 'react';
import { useNavigate, Link, useParams } from 'react-router-dom';
import '../styles/AddUser.css';
import {validateEmail , validateURL} from '../../service/validation'

const AddUser = () => {
  const navigate = useNavigate();
  const { i } = useParams();
  const [array, setArray] = useState();
  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
    contactName: '',
    contactPhone: '',
    contactEmail: '',
    notes: '',
    business: '',
    category: [],
    commission: '',
    date: '',
    img: '',
    payment: ''
  })
  const [errors,setErrors] = useState(false); 
  const [select,setSelect] = useState(true);
 
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('users') || "[]");
    // console.log(items,"Items in LocalStorage at Initial rendering");
    if (items.length) {
      setArray(items);
    } else {
      setArray([]);
    }
  }, []);
  // console.log(array,"Array in Local Storage")

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem('users'));
    // console.log(users[i],"users")
    if (i) {
      console.log(users[i], "users in Edit")
      let { name, email, phone, website, contactName, contactPhone, contactEmail, notes, business, category, commission, date, account, payment } = users[i];
      setUser({ name, email, phone, website, contactName, contactPhone, contactEmail, notes, business, category, commission, date, account, payment });
      // setUser(users[i])
    }
  }, [i])

  const onInputChange = (e) => {
    // console.log(user,"Form data")
    if(e.target.name === 'category'){
      let categories = {...user};
      if(e.target.checked){
        categories.category.push(e.target.value)
      }else{
        categories.category = categories.category.filter(item => item !== e.target.value)
      }
      setUser(categories)
    } else {
        setUser(() => ({
          ...user,[e.target.name]:e.target.value
        }))      // setUser({ ...user, [e.target.name]: e.target.value })
    } 
  }

  const handleSubmit = (e) => {
    // const data = {...user,category:multiSelect,account:select};
    const data = {...user,account:select}
    let keys = Object.keys(user);
    e.preventDefault();
    for (let key of keys){
      if(!user[key] || user[key] === ""){
        setErrors(true);
        return alert(`${key} field cannot be Empty`);
        // return alert("Please Fill All Required Fields");  
    }
  }   
    if(!validateEmail(user.email)){
      return alert('Please Enter Valid Email')
    }else if(!validateEmail(user.contactEmail)){
      return alert('Please Enter Valid Contact Email')
    }else if(!validateURL(user.website)){
      return alert('Please Enter valid URL')
    }else
      i ? updateUser(i) : setArray(prev => [...(prev || []), data]);

    setUser({name: '',email: '',phone: '',website: '',contactName: '',contactPhone: '',contactEmail: '',notes: '',business: '',category: '',commission: '',date: '',img: '',account: '',payment: ''})
    setSelect('');

    setTimeout(() => {
      navigate('/')
    }, 10)
  }

  const updateUser = (i) => {
    let { name, email, phone, website, contactName, contactPhone, contactEmail, notes, business, category, commission, date, img, account, payment } = user;
    let total = [...array];
    total.splice(i, 1, { name, email, phone, website, contactName, contactPhone, contactEmail, notes, business, category, commission, date, img, account, payment });
    setArray(total);
  }

  useEffect(() => {
    if (array?.length) {
      localStorage.setItem("users", JSON.stringify([...array]));
    }
  }, [array])
      // console.log(array,"Array")

  return (
    <div className='bgImg'>
      <div className="container">
        <h1 className="header">New Business</h1>
        <form action="#" name="form">
          {/* <legend>Personal details</legend> */}
          <label htmlFor="name" className="head">Name <span style={{ color: "orangeRed" }}><sup>*</sup></span></label><br />
          <input type="text" id="name" name="name" value={user.name} placeholder='Enter Your Name' className={`${errors&&user.name.length<=0?"error-border":""}`} onChange={e => onInputChange(e)} required /><br />
            {errors&&user.name.length<=0?<p className='error'>Name can't be Empty</p>:""}
          <label htmlFor="email" className="head">Email <span style={{ color: "orangeRed" }}><sup>*</sup></span></label><br />
          <input type="email" id="email" name="email" value={user.email} placeholder='Enter Your Email' className={`${errors&&user.email.length<=0?"error-border":""}`} onChange={e => onInputChange(e)} required /><br />
            {errors&&user.email.length<=0?<p className='error'>Email can't be Empty</p>:""}
          <label htmlFor="phone" className="head">Phone <span style={{ color: "orangeRed" }}><sup>*</sup></span></label><br />
          <input type="tel" id="phone" name="phone" value={user.phone} placeholder='Enter Your Phone Number' className={`${errors&&user.phone.length<=0?"error-border":""}`} maxLength={10} onChange={e => onInputChange(e)} required /><br />
            {errors&&user.phone.length<=0?<p className='error'>Phone can't be Empty</p>:""}
          <label htmlFor="website" className="head">Website <span style={{ color: "orangeRed" }}><sup>*</sup></span></label><br />
          <input type="url" id="website" name="website" value={user.website} placeholder='Enter Your Website' className={`${errors&&user.website.length<=0?"error-border":""}`} onChange={e => onInputChange(e)} required /><br />
            {errors&&user.website.length<=0?<p className='error'>Website can't be Empty</p>:""}
          <label htmlFor="contactName" className="head">Contact Name <span style={{ color: "orangeRed" }}><sup>*</sup></span></label><br />
          <input type="text" id="contactName" name="contactName" value={user.contactName} placeholder='Enter Your Name' className={`${errors&&user.contactName.length<=0?"error-border":""}`} onChange={e => onInputChange(e)} required /><br />
            {errors&&user.contactName.length<=0?<p className='error'>Contact Name can't be Empty</p>:""}
          <label htmlFor="contactPhone" className="head">Contact Phone <span style={{ color: "orangeRed" }}><sup>*</sup></span></label><br />
          <input type="tel" id="contactPhone" name="contactPhone" value={user.contactPhone} placeholder='Enter Your Phone Number' className={`${errors&&user.contactPhone.length<=0?"error-border":""}`} maxLength={10} onChange={e => onInputChange(e)} required /><br />
            {errors&&user.contactPhone.length<=0?<p className='error'>Contact Phone can't be Empty</p>:""}
          <label htmlFor="contactEmail" className="head">Contact Email <span style={{ color: "orangeRed" }}><sup>*</sup></span></label><br />
          <input type="email" id="contactEmail" name="contactEmail" value={user.contactEmail} placeholder='Enter Your Email' className={`${errors&&user.contactEmail.length<=0?"error-border":""}`} onChange={e => onInputChange(e)} required /><br />
            {errors&&user.contactEmail.length<=0?<p className='error'>Contact Email can't be Empty</p>:""}
          <label htmlFor="notes" className="head">Notes</label><br />
          <textarea id="notes" cols="45" rows="5" name="notes" value={user.notes} className={`${errors&&user.notes.length<=0?"error-border":""}`} onChange={e => onInputChange(e)} required></textarea><br />
            {errors&&user.notes.length<=0?<p className='error'>Notes can't be Empty</p>:""}

          <p className="businessType" value={user.business}>Business Type <span style={{ color: "orangeRed" }}><sup>*</sup></span> : {user.business} </p><br />
          <input type="radio" name="business" id="small business" value="Small Business" className={`${errors&&user.business.length<=0?"error-border":""}`} onChange={e => onInputChange(e)} />
          <label htmlFor="small business" className="business">Small Business</label>
          <input type="radio" name="business" id="enterprise" value="Enterprise" className={`${errors&&user.business.length<=0?"error-border":""}`} onChange={e => onInputChange(e)} />
          <label htmlFor="enterprise" className="business">Enterprise</label>
          <input type="radio" name="business" id="entrepreneur" value="Entrepreneur" className={`${errors&&user.business.length<=0?"error-border":""}`} onChange={e => onInputChange(e)} />
          <label htmlFor="entrepreneur" className="business">Entrepreneur</label><br />
            {errors&&user.business.length<=0?<p className='error'>Business Type can't be Empty</p>:""}

          <p className='head category'>Category <span style={{ color: "orangeRed" }}><sup>*</sup></span> :</p>
          <input type="checkbox" id="clothes" name="category" value="Clothes" className='category' onChange={e => onInputChange(e)} checked={user.category.indexOf('Clothes') !== -1} />
            <label htmlFor="clothes" className='categoryLabel'>Clothes</label>
          <input type="checkbox" id="toys" name="category" value="Toys" className='category' onChange={e => onInputChange(e)} checked={user.category.indexOf('Toys') !== -1} />
            <label htmlFor="toys" className='categoryLabel'>Toys</label>
          <input type="checkbox" id="groceries" name="category" value="Groceries" className='category' onChange={e => onInputChange(e)} checked={user.category.indexOf('Groceries') !== -1} />
            <label htmlFor="groceries" className='categoryLabel'>Groceries</label>
          <input type="checkbox" id="electronics" name="category" value="Electronics" className='category' onChange={e => onInputChange(e)} checked={user.category.indexOf('Electronics') !== -1} />
            <label htmlFor="electronics" className='categoryLabel'>Electronics</label>
          <input type="checkbox" id="digital" name="category" value="Digital" className='category' onChange={e => onInputChange(e)} checked={user.category.indexOf('Digital') !== -1} />
            <label htmlFor="digital" className='categoryLabel'>Digital</label><br />     

          <label htmlFor="commission" className="head">Commission Percentage <span style={{ color: "orangeRed" }}><sup>*</sup></span></label>
          <input type="text" id="commission" name="commission" value={user.commission} placeholder="Enter Your Commission Percentage" className={`${errors&&user.commission.length<=0?"error-border":""}`} onChange={e => onInputChange(e)} required /><br />
            {errors&&user.commission.length<=0?<p className='error'>Commission can't be Empty</p>:""}
  
          <label htmlFor="date" className="head">Active From <span style={{ color: "orangeRed" }}><sup>*</sup></span></label>
          <input type="date" name="date" value={user.date} id="date" onChange={e => onInputChange(e)} className={`${errors&&user.date.length<=0?"error-border":""}`} required /><br />
            {errors&&user.date.length<=0?<p className='error'>Date can't be Empty</p>:""}
  
          <label htmlFor="img" className="head">Select image <span style={{ color: "orangeRed" }}><sup>*</sup></span></label>
          <input type="file" id="img" name="img" value={user.img} accept="image/*" className={`${errors&&user.img.length<=0?"error-border":""}`} onChange={e => onInputChange(e)} required /> <br />
            {errors&&user.img.length<=0?<p className='error'>Image can't be Empty</p>:""}

          <p className="criticalAccount">Critical Account </p><br />
          <input type="checkbox" name="account" id="account" value="Success" checked={select} onChange={e=>setSelect(prev=>!prev)} />
          <label htmlFor="account" className="account">To represent whether the account is critical so that we can provide extra care in case of any queries. </label><br />

          <p className="payOption">Payment Options <span style={{ color: "orangeRed" }}><sup>*</sup></span> : {user.payment} </p><br />
          <input type="radio" name="payment" id="COD" value="Cash on Delivery" className={`${errors&&user.payment.length<=0?"error-border":""}`} onChange={e => onInputChange(e)} />
          <label htmlFor="COD" className="payment">Cash on Delivery</label>
          <input type="radio" name="payment" id="UPI" value="UPI" className={`${errors&&user.payment.length<=0?"error-border":""}`} onChange={e => onInputChange(e)} />
          <label htmlFor="UPI" className="payment">UPI</label>
          <input type="radio" name="payment" id="Card Payment" value="Card Payment" className={`${errors&&user.payment.length<=0?"error-border":""}`} onChange={e => onInputChange(e)} />
          <label htmlFor="Card Payment" className="payment">Card Payment</label><br />  
            {errors&&user.payment.length<=0?<p className='error'>Payment Option can't be Empty</p>:""}

          <button type="submit" className='submit' onClick={handleSubmit}>{i ? "Update" : "Add"} User</button>
          <Link to="../"><button className='cancel'>Cancel</button></Link>
        </form>
      </div>
    </div>
  )
}
export default AddUser;
