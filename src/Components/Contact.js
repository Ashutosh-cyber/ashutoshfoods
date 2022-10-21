import React, { useState } from "react";
import "../Styles/Contact.css";
import Grains from "../assets/grain.jpg";
import { db } from "../Components/Firebase";
import { addDoc, collection } from "firebase/firestore";

function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);
  const collectionRef = collection(db, "contact");

  // const handleFn = async () => {
  //   await addDoc(collectionRef, { name: name, phone: phone, message: message });
  // };

    const handleFn = async (e) => {
      e.preventDefault();
      setLoader(true);


    await addDoc(collectionRef, { name: name, phone: phone, message: message });

      setName("");
      setPhone("");
      setMessage("");

      alert("form submitted successfully")
    };

  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${Grains})` }}
      ></div>
      <div className="rightSide">
        <h1> Contact Us</h1>

        <form id="contact-form">
          <label htmlFor="name">Full Name</label>
          <input
            name="name"
            placeholder="Enter full name..."
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="phone">Mobile number</label>
          <input
            name="phone"
            placeholder="Enter Mobile number..."
            type="tel"
            onChange={(e) => setPhone(e.target.value)}
          />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Enter your query..."
            name="message"
            required
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button type="submit" onClick={handleFn}>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
