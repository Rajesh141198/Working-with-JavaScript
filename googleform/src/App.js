import React, { useState, useEffect } from "react";
import './App.css';


const App = () => {
    const [form, setForm] = useState({
      firstName: '',
      lastName: '',
      mobile: '',
      email: '',
      linkedin: '',
      github: '',
      address: ''
    });
  
    useEffect(() => {
      const savedDetails = JSON.parse(localStorage.getItem('personalDetails'));
      if (savedDetails) {
        setForm(savedDetails);
      }
    }, []);
  
    const handleChange = (e) => {
      const { id, value } = e.target;
      setForm({ ...form, [id]: value });
    };
  
    const saveDetails = () => {
      localStorage.setItem('personalDetails', JSON.stringify(form));
      alert('Details saved successfully!');
    };
  

return(
    <div>
        <button className="Heading">
            <strong>EMPLOYEE PERSONAL INFO</strong>
        </button>
        <div className="Container1">
            <div>
                <label>FirstName *</label><br />
                <input className="Box1" type="text" id="firstName"  value={form.firstName}  onChange={handleChange} placeholder="FirstName" />
            </div>
            <div>
                <label>LastName *</label><br />
                <input className="Box2" type="text" id="lastName"  value={form.LastName}  onChange={handleChange} placeholder="LastName" />
            </div>
        </div>
        <div class="Container1">
            <div>
                <label>Mobile *</label><br />
                <input className="Box3" type="text" id="mobile"  value={form.Mobile}  onChange={handleChange} placeholder="Mobile Number" />
            </div>
            <div>
                <label>Email Id *</label><br />
                <input className="Box4" type="text" id="email"  value={form.EmailId}  onChange={handleChange} placeholder="Email Id" />
            </div>
        </div>
        <div className="Container1">
            <div>
                <label>LinkedIn</label><br />
                <input className="Box5" type="text" id="linkedin"  value={form.LinkedIn}  onChange={handleChange} placeholder="LinkedIn" />
            </div>
            <div>
                <label>Github</label><br />
                <input className="Box6" type="text" id="github"  value={form.Github}  onChange={handleChange} placeholder="Github" />
            </div>
        </div>
        <label className="Nametag">Address *</label><br />
        <input className="Box7" type="text" id="address"  value={form.address}  onChange={handleChange} placeholder="Address/" />
        <button className="submit" onClick={saveDetails}>Submit</button>


    </div>
          
);

};



export default App;

















