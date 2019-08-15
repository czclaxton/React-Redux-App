import React from "react";
import { connect } from "react-redux";
import PlayerCard from "./PlayerCard";
import { getData } from "../actions/index";
import Loader from "react-loader-spinner";

const PlayerList = props => {
  return (
    <div className="playerList">
      <button className="playersBtn" onClick={props.getData}>
        Get Players
      </button>
      {console.log("props", props)}
      {props.isLoading === true ? (
        <Loader type="tailspin" color="#00BFFF" height="15" width="100" />
      ) : (
        props.players.map(player => (
          <PlayerCard
            key={player.id}
            first_name={player.first_name}
            last_name={player.last_name}
            position={player.position}
          />
        ))
      )}
    </div>
  );
};

// export default PlayerList;
const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    players: state.players
  };
};

export default connect(
  mapStateToProps,
  { getData }
)(PlayerList);
