import React, { useState } from "react";
import normalBaby from "../assets/unadulterated-hoglette.png";
import SunBaby from "../assets/sun-eyes.png";
import BlueBaby from "../assets/blue-eyes.png";
import GlowingBaby from "../assets/glowing-eyes.png";

// is there a way we could associate eye color string values with images?
// perhaps so we could do something along the lines of `eyeColorMapper['blue'] and get back the right image?`

function BabyHog(props) {
  const [weight, setWeight] = useState(200);

  function handleIncrease(e) {
    // how can we reuse this for both buttons?
    // perhaps something with e.target.name === "+"
    setWeight(e.target.name === "+" ? weight + 20 : weight - 20)
  }
  function eyeColorMapper(color) {
    if (color === "blue") {
      return BlueBaby
    }
    else if (color === "glowing") {
      return GlowingBaby
    }
    else if (color === "sun") {
      return SunBaby
    }
    else { return normalBaby }
  }

  return (
    <li className="hogbabies">
      <h1>Name:{props.name}</h1>
      <h3>Weight:{weight}:</h3>
      <h3>Hobby:{props.hobby}</h3>
      <h4>Eye Color:{props.eyeColor}</h4>

      <button name="+" onClick={handleIncrease}>Increase Weight</button>
      <button name="-" onClick={handleIncrease}>Decrease Weight</button>

      <div className="hb-wrap">
        <img
          src={eyeColorMapper(props.eyeColor)}
          style={{ height: "200px" }}
          alt="MasterBlasterJrJr"
        />
      </div>
    </li>
  );
}

export default BabyHog;
