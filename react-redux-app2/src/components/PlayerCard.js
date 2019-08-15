import React from "react";

const PlayerCard = props => {
  return (
    <div className="playerCard">
      <h3>
        {props.first_name} {props.last_name}
      </h3>

      <p>Position: {props.position}</p>
    </div>
  );
};

export default PlayerCard;
