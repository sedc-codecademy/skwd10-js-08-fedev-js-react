import { useEffect } from "react";
import "./PersonDetails.css";

const PersonDetails = props => {
  useEffect(() => {
    return () => {
      console.log("Component Will Unmount");
    };
  });

  return (
    <div className="PersonDetails">
      <div className="details__container">
        {!props.selectedPersonData && (
          <div className="placeholder__container">No Person Selected</div>
        )}
        {props.selectedPersonData && (
          <>
            <div>
              <strong>Name: </strong>
              {props.selectedPersonData.name}
            </div>
            <div>
              <strong>Birth Year: </strong>
              {props.selectedPersonData.birth_year}
            </div>
            <div>
              <strong>Gender: </strong>
              {props.selectedPersonData.gender}
            </div>
            <div>
              <strong>Skin Color: </strong>
              {props.selectedPersonData.skin_color}
            </div>
            <div>
              <strong>Eye Color: </strong>
              {props.selectedPersonData.eye_color}
            </div>
            <div>
              <strong>Hair Color: </strong>
              {props.selectedPersonData.hair_color}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PersonDetails;
