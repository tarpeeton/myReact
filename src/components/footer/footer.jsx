import React from "react";
import F from  "../../css/footer.module.css";
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import { NavLink } from "react-router-dom";

const FOOTER = (props) => {
  const Author = React.createRef();
  const Description = React.createRef();
  
  // Yangi Author va Qoshiq nomi uchun yaratilgan funsksiya
  const newAuthor = () => {
    props.yangiAuthor()
  }

  // new Data Musics
  const newDataText = () => {
    const newName = Author.current.value;
    const newText = Description.current.value;
    props.newDataTextOne(newName,newText);
  }



  // JSX
  return (
    <div className={F.footer}>
      <span className={F.header}>Contact Me</span>
      <div className={F.left}>
        <textarea ref={Author} onChange={newDataText} value={props.state.footerPage.newText} autoComplete="new-name" id="name" name="name"  placeholder="Name" className="name"/>
        <textarea autoComplete="new-email" id="email" name="email"  placeholder="Email/Contact" className="email"/>
      </div>
      <div className={F.right}>
        <textarea ref={Description} onChange={newDataText} value={props.state.footerPage.newName} name="message" placeholder="Message" className="msg"/>
        <button onClick={newAuthor} className="submitbtn"> <IoMdSend/> </button>
      </div>
      <div className={F.links}>
        <div className={F.SocialLinks}>
          <NavLink to="https://www.instagram.com"> <FaInstagram/> </NavLink>
          <NavLink to="https://www.telegram.com"> <FaTelegram/> </NavLink>
          <NavLink to="https://www.tiktok.com"> <FaTiktok/> </NavLink>
        </div>
      </div>
    </div>
  );
  
};

export default FOOTER;
