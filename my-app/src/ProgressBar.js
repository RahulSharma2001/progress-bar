import React, { useEffect, useState } from "react";

export default function ProgressBar() {
  const [filled, setFilled] = useState(0);
  const [current, setCurrent] = useState("Loading...");

  useEffect(() => {
    if (filled < 100) setTimeout(() => setFilled((prev) => prev + 2), 250);
    else {
      setCurrent("Completed");
    }
  }, [filled]);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "smoke",
      }}
    >
      <div
        className="progressbar"
        style={{
          margin: "100px",
          width: "400px",
        }}
      >
        <h1>ProgressBar</h1>
        <div
          style={{
            height: "100%",
            width: `${filled}%`,
            backgroundColor: "green",
            transition: "width 0.5s",
            padding: "10px",
            borderRadius: "15px",
          }}
        >
          <span>{filled}%</span>
        </div>
        <h3>{current}</h3>
      </div>
    </div>
  );
}
