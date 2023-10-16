import React from "react";
import { forwardRef } from "react";

const ScrollBlock = forwardRef(function MyInput(props, ref) {
  // React.useEffect(() => {
  //   window.addEventListener("scroll", function () {
  //     console.log(window.scrollTo);
  //   });
  // }, []);
  // const handleScroll = () => {
  //   setScroll(window.scrollY);
  // };
  // React.useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);
  const ref = React.useRef();

  const [scrollA, setScrollA] = React.useState(0);

  React.useEffect(() => {
    window.addEventListener("scroll", function eee() {
      const feik = ref.current.getBoundingClientRect().top;

      console.log(feik);
    });

    return (
      <section className="scroll-block">
        <div
          className={
            props.scrollA > 784
              ? "scroll-block__none"
              : "scroll-block__light-green"
          }
          ref={ref}
        ></div>
        <div className={"scroll-block__blue"}></div>
        <div className={"scroll-block__lilac"}></div>
      </section>
    );
  });

  export default ScrollBlock;
});
