import PersonListItem from "../PersonListItem/PersonListItem";
import "./PersonList.css";

const PersonList = props => {
  return (
    <>
      {!props.peopleData && <div className="PersonList">Loading...</div>}
      {props.peopleData && (
        <ol className="PersonList">
          {props.peopleData.map((person, index) => (
            <PersonListItem
              isSelected={props.selectedPersonName === person.name}
              key={person.name + Math.random()}
              name={person.name}
              personIndex={index}
              onListItemClick={props.onListItemClick}
            />
          ))}
        </ol>
      )}
    </>
  );
};

export default PersonList;
