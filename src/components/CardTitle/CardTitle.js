import "./CardTitle.css";

import { forwardRef } from "react";

const CardTitle = forwardRef(({ style, title }, ref) => {
  return (
    <section ref={ref} className={"card-title__block" + " " + style}>
      <div className="card-title">
        <h2>{title}</h2>
      </div>
    </section>
  );
});

export default CardTitle;
