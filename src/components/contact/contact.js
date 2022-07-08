import "./contact.scss";
import "../../styles.scss";
import { useState, useRef } from "react";
import { send } from "emailjs-com";
import { SocialIcon } from "react-social-icons";
import { mail } from "./data.ts";

function Contact() {
  const [toSend, setToSend] = useState({
    from_name: "",
    message: "",
    from_email: "",
  });

  const [isActive, setIsActive] = useState(false);
  const [buttonText, setButtonText] = useState("Submit");

  const onSubmit = (e) => {
    e.preventDefault();
    // send(mail.SERVICE_ID, mail.TEMPLATE_ID, toSend, mail.PUBLIC_KEY)
    //   .then((response) => {
    //     // console.log("SUCCESS!", response.status, response.text);
    //   })
    //   .catch((err) => {
    //     // console.log("FAILED...", err);
    //   });
    // setToSend({
    //   from_name: "",
    //   message: "",
    //   from_email: "",
    // });
    setIsActive(true);
    setButtonText(isActive ? "Submit" : "SENT");
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const captchaRef = useRef(null);
  return (
    <section id="contact" className="container">
      <h1>Send Me a Message</h1>
      <form onSubmit={onSubmit}>
        <div className="input-container">
          <input
            className="name"
            type="text"
            name="from_name"
            placeholder="NAME"
            value={toSend.from_name}
            onChange={handleChange}
            required
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
            required
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
            required
          />
        </div>
        <div className="input-container">
          <button
            className={isActive ? "submit active" : "submit"}
            type="submit"
          >
            <p id="btnText">{buttonText}</p>
          </button>
        </div>
      </form>
      <div className="contact-row">
        <div className="icons">
          <SocialIcon
            className="icon"
            url="https://linkedin.com/in/gregfouzie"
          />
          <SocialIcon className="icon" url="https://github.com/gfouzie" />
          <SocialIcon
            className="icon"
            network="email"
            url="mailto:gregfouzie@gmail.com"
          />
        </div>
      </div>
    </section>
  );
}
export default Contact;
