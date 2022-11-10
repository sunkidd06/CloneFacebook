import React from "react";
import { useSelector } from "react-redux";
import { Splitter1 } from "../Splitter1";
import "./style.css";
import { Feeling, LiveVideo, Photo } from "../../svg"
export const CreatePost = ({ setShowPostUp }) => {
  const user = useSelector(state => state.user);
  return (
    <div className="create_post" onL>
      <div className="create_post_header">
        <img src={user.picture} alt="" />
        <div className="open_post hover2" onClick={() => setShowPostUp(true)}>
          What's on your mind, {user?.first_name}?
        </div>
      </div>
      <div className="create_post_splitter"></div>
      <div className="create_post_body">
        <div className="create_post_icon hover1">
          <LiveVideo color="#f3425f" />
          Live Video
        </div>
        <div className="create_post_icon hover1">
          <Photo color="#4bbf67" />
          Photo/Video
        </div>
        <div className="create_post_icon hover1">
          <Feeling color="#f7b928" />
          Feeling/Activity
        </div>
      </div>
    </div >
  );
};
