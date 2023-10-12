import "./ScrollBlock.css";
import React from "react";
import { refB } from "../CardTariff/CardTariff";
function ScrollBlock() {
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
      const nefeik = refB.current.getBoundingClientRect().top;
      console.log(nefeik);
      // const recta = ref.current.getBoundingClientRect().top;
      // const recty = window.scrollY;
      // const rect = recta + recty;
      // setScrollA(rect);

      // console.log(recta);
      // console.log(recty);
      // console.log(rect);
      // return window.removeEventListener("scroll", eee);
    });
  });

  // function scrollBD(number) {
  //   const rect = ref.current.getBoundingClientRect();
  //   if (rect.top > number) {
  //     ref.classList.add("scroll-block__none");
  //   }
  // }

  return (
    <section className="scroll-block">
      <div
        className={
          scrollA > 784 ? "scroll-block__none" : "scroll-block__light-green"
        }
        ref={ref}
      ></div>
      <div className={"scroll-block__blue"}></div>
      <div className={"scroll-block__lilac"}></div>
    </section>
  );
}

export default ScrollBlock;
