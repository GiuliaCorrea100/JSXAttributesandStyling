import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200/300";

ReactDOM.render(
  <div>
    <h1 className="heading">Some random images</h1>
    <img src={img} />
    <img src={img + "?grayscale"} />
    <img
      className="image"
      src="https://media.istockphoto.com/id/1500563478/photo/traveler-asian-woman-relax-and-travel-on-thai-longtail-boat-in-ratchaprapha-dam-at-khao-sok.jpg?s=612x612&w=0&k=20&c=_bb2PdPJMtY9KmNNBSFY6w_TOcC98we45LvsYoa48p8="
    />
  </div>,
  document.getElementById("root")
);
