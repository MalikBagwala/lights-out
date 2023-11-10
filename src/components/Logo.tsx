import React, { useState } from "react";
import { useTransition, animated } from "@react-spring/web";
import LogoSrc from "../assets/logo.png";
const Logo = () => {
  const [toggle, setToggle] = useState(false);

  const transitions = useTransition(toggle, {
    from: { position: "absolute", top: 70, left: "49%", opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return (
    <span style={{ cursor: "pointer" }}>
      {transitions((styles, item) => (
        <animated.span
          style={{ ...styles, position: "absolute", top: 90, left: "49%" }}
          onClick={() => setToggle((prevToggle) => !prevToggle)}
        >
          {item ? (
            "⚡"
          ) : (
            <img src={LogoSrc} alt="logo" height={80} width={80} />
          )}
        </animated.span>
      ))}
    </span>
  );
};

export default Logo;
