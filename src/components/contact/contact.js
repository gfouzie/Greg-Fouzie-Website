import "./contact.scss";
import "../../styles.scss";
import { useState } from "react";
import { send } from "emailjs-com";
import { SocialIcon } from "react-social-icons";

const SERVICE_ID = "service_o7nyctc";
const TEMPLATE_ID = "template_8xa7eaq";
const PUBLIC_KEY = "Z_cEs6eofK2LKfUGf";

function Contact() {
  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "",
    message: "",
    from_email: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send(SERVICE_ID, TEMPLATE_ID, toSend, PUBLIC_KEY)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  return (
    <section id="contact" className="container row">
      <h1>send me a message!</h1>
      <form onSubmit={onSubmit}>
        <div className="input-container">
          <input
            className="name"
            type="text"
            name="from_name"
            placeholder="NAME"
            value={toSend.from_name}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <input
            className="email"
            type="email"
            name="from_email"
            placeholder="EMAIL"
            value={toSend.from_email}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <textarea
            className="message"
            type="text"
            name="message"
            placeholder="MESSAGE"
            value={toSend.message}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <button className="submit" type="submit">
            Submit
          </button>
        </div>
      </form>
      <div className="contact-row">
        <SocialIcon url="https://linkedin.com/in/gregfouzie" />
        <SocialIcon url="https://github.com/gfouzie" />
        <SocialIcon
          className="circle-icon"
          network="email"
          url="mailto:gregfouzie@gmail.com"
        />
      </div>
    </section>
  );
}
export default Contact;
