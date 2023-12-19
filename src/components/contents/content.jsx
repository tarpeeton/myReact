import React from "react";
import content from  '../../css/content.module.css';
import { CiPlay1 } from "react-icons/ci";
import Album from "../albums/albums";
import image from "../../images/morgenshter.jpg"


const CardItem = (props) => {
  
    return (
        <div className={content.CardItems}> 
        <img src={image} alt="this is text" />
        <h2>{props.data.name}</h2>
        <button className={content.Play}> <CiPlay1/> </button>
        <p>{props.data.description}</p>
    </div>
    )
}


const CONTAINER = (props) => {
  let Container = props.state.music.map((d, index) => (
    <CardItem key={index} data={d} />
  ));
  let Albums = props.state.albums.map((a, index) => (
    <Album key={index} data={a} />
  ));
  return (
    <div className={content.CardWrapper}>
      {Container}
      <h1 className={content.albumsHeader}>Albums</h1>
      {Albums}
    </div>
  );
}



export default CONTAINER;