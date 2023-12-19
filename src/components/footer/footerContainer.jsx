import React from "react";
import { NewAuthor, newDescription } from "../../datas/footer-reducer";
import FOOTER from "./footer";

const FooterContainer = (props) => {

  const newAuthor = () => {
    props.dispatch(NewAuthor());
  }

  // new Data Musics
  const newDataTextOne = (newName, newText) => {
    props.dispatch(newDescription(newName, newText));
  }

  // JSX
  return (
    <FOOTER state={props.state} yangiAuthor={newAuthor} newDataTextOne={newDataTextOne} />
  );
};

export default FooterContainer;
