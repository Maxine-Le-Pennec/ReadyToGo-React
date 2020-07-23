import React from "react";

function Button({ value, state }) {
  return (
    <div className="switch">
      <button
        className={value === true ? "off" : "on"}
        onClick={() => {
          state(true);
        }}
      >
        ON
      </button>
      <button
        className={value === true ? "on" : "off"}
        onClick={() => {
          state(false);
        }}
      >
        OFF
      </button>
    </div>
  );
}

export default Button;
