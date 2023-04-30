import React from "react";
import "../Styles/Stats.css";
import CountUp from "react-countup";
import { useSpring, animated } from "react-spring";

function Stats() {
  const statsProps = useSpring({
    from: { opacity: 0, transform: "translateY(50px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    delay: 200,
  });

  return (
    <div className="stats">
      <div className="stats__overlay" />
      <div className="stats__background" />
      <div className="stats__content">
        <animated.div className="stats__container" style={statsProps}>
          <h3>Working Hours</h3>
          <h4>
            <CountUp end={775} duration={5} />+ Hrs
          </h4>
        </animated.div>
        <animated.div className="stats__container" style={statsProps}>
          <h3>Clients</h3>
          <h4>
            <CountUp end={300} duration={5} />+
          </h4>
        </animated.div>
        <animated.div className="stats__container" style={statsProps}>
          <h3>Services Completed</h3>
          <h4>
            <CountUp end={475} duration={5} />+
          </h4>
        </animated.div>
        <animated.div className="stats__container" style={statsProps}>
          <h3>Employees</h3>
          <h4>
            <CountUp end={165} duration={5} />+
          </h4>
        </animated.div>
      </div>
    </div>
  );
}

export default Stats;
