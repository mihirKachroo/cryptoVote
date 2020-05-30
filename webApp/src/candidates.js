import React from "react";
import "./candidate.css"
import Justin from "./politicianImages/justin.jpg"


class HoverPage extends React.Component { 
  render() {
    return (  
<div class="container">
  <img style={{width: 250, height: 250}} src={Justin} alt="" />
  <div class="overlay">

    <div class="text">Justin Trudeau</div>
  </div>
</div>
    );
  }
}

export default HoverPage;
