import React from "react";

const Rank = ({ name, entries }) => {
  return (
    <div>
      <div className="white f3">
        {`${name}, you have detected ${entries} faces`}
      </div>
    </div>
  );
};

export default Rank;
