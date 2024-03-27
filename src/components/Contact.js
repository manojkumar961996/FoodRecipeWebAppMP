import React, { useState } from 'react';
import './Contact.css';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className = "contact-us">
      <h2> Contact Us </h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type = "text"
            id = "name1"
            name = "name"
            value = {name}
            onChange={ (p) => setName(p.target.value) }
            required
          />
        </div>
        <div className=" form-group ">
          <label htmlFor=" email ">Email:</label>
          <input
            type = "email"
            id = "email"
            name = "email"
            value = {email}
            onChange = { (p) => setEmail(p.target.value) }
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message"> Message: </label>
          <textarea
            id =  "message "
            name ="message"
            rows = "6"
            value = {message}
            onChange={(p) => setMessage(p.target.value)}
            required
          ></textarea>
        </div>
        <button type = "submit" className = "submit"> Submit </button>
      </form>
      <h2> email : dvdsvdsvfsd@gmail.com </h2>
      <h2> Contact : +91 123456789 </h2>
    </div>
  );
};

export default ContactUs;
