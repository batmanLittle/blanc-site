import "./ScrollBlock.css";
import React from "react";
import { forwardRef } from "react";

const ScrollBlock = forwardRef((props, refVanishBlock) => {
  // const ref = React.useRef();

  // const [scrollA, setScrollA] = React.useState(0);

  // React.useEffect(() => {
  //   console.log(props.scrollA);
  // });

  return (
    <section className="scroll-block" ref={refVanishBlock}>
      <div className="scroll-section">
        <div
          className={
            props.scrollGreen === true
              ? "scroll-block__none"
              : "scroll-block__light-green"
          }
        ></div>
        <div
          className={
            props.scrollBlue === true
              ? "scroll-block__none"
              : "scroll-block__blue"
          }
        ></div>
        <div
          className={
            props.scrollLilac === true
              ? "scroll-block__none"
              : "scroll-block__lilac"
          }
        ></div>
      </div>
    </section>
  );
});

export default ScrollBlock;
