import React, { useState } from "react";
import BeatLoader from "react-spinners/BeatLoader";
const Post = ({ posts, loading }) => {
  const [color, setColor] = useState("#36D7B7");
  if (loading) {
    return <BeatLoader color={color} size={30} />;
  }
  return (
    <div>
      <h5>
        {posts.map((e) => {
          return <div key={e.id}>{e.title} <hr style={{width:"20%"}} /> </div>;
        })}
      </h5>
    </div>
  );
};

export default Post;
