import React, { useState, useEffect } from 'react';
import { useTransition, animated } from 'react-spring';
const Logo = () => {
  const [toggle, set] = useState(false);
  const transitions = useTransition(toggle, null, {
    from: { position: 'absolute', top: 70, left: '49%', opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });
  return (
    <span style={{ cursor: 'pointer' }}>
      {transitions.map(({ item, key, props }) =>
        item ? (
          <animated.span key={item} style={props} onClick={e => set(!toggle)}>
            ⚡
          </animated.span>
        ) : (
          <animated.span key={item} style={props} onClick={e => set(!toggle)}>
            ✌
          </animated.span>
        )
      )}
    </span>
  );
};

export default Logo;
