import Button from "../Button/Button";
import styles from "./Contact.module.css";
import { MdMessage } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("your name"); //using useState hook to render the changes
  const [email, setEmail] = useState("your email");
  const [text, setText] = useState("your feedback");

  const onSubmit = (event) => {
    event.preventDefault();

    setName(event.target[0].value); //instilling the setvalues
    setEmail(event.target[1].value);
    setText(event.target[2].value);
  };

  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button text="VIEW SUPPORT CHAT" icon={<MdMessage fontSize={24} />} />
          <Button text="VIEW CALL" icon={<IoIosCall fontSize={24} />} />
        </div>
        <Button
          isOutline={true}
          text="via Email"
          icon={<MdOutlineMail fontSize={24} />}
        />

        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name"> Name </label>
            <input type="text" name="name" />
          </div>

          <div className={styles.form_control}>
            <label htmlFor="email"> Email </label>
            <input type="email" name="email" />
          </div>

          <div className={styles.form_control}>
            <label htmlFor="name"> Text </label>
            <textarea name="text"></textarea>
          </div>

          <div style={{ display: "flex" }}>
            <Button isOutline={true} text="SUBMIT" />
          </div>
          <div>{name + " " + email + " " + text}</div>
        </form>
      </div>
      <div className={styles.contact_image}>
        <img
          src="./public/images/service-art.jpg"
          alt="contact image"
          width={500}
        />
      </div>
    </section>
  );
};

export default ContactForm;
