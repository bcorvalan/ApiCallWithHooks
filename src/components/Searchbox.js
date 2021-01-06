import React from "react";

function Searchbox(props) {
  return (
    <div>
      <input
        onChange={props.handleInput}
        onBlur={props.handleOnBlur}
        onKeyUp={props.handleKeyUp}
        className="border "
        type="text"
      />
    </div>
  );
}

export default Searchbox;
