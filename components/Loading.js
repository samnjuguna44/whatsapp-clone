import React from "react";
import { Circle } from 'better-react-spinkit';

function Loading() {
  return (
    <center style={{ display: "grid", placeItems: "center", height: "100vh"}}>
      <div>
        <img
          src="https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c543.png"
          alt=""
          style={{ marginBottom: 10 }}
          height={200}
        />
        <Circle color="#3CBC24" size={60} />
      </div>
    </center>
  );
}

export default Loading;
