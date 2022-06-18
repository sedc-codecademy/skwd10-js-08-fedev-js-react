import React from "react";
import PersonListItem from "../PersonListItem/PersonListItem";
import "./PersonList.css";

class PersonList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    console.log("Person List Updated");
  }

  render() {
    return (
      <>
        {!this.props.peopleData && <div className="PersonList">Loading...</div>}
        {this.props.peopleData && (
          <ol className="PersonList">
            {this.props.peopleData.map((person, index) => (
              <PersonListItem
                isSelected={this.props.selectedPersonName === person.name}
                key={person.name + Math.random()}
                name={person.name}
                personIndex={index}
                onListItemClick={this.props.onListItemClick}
              />
            ))}
          </ol>
        )}
      </>
    );
  }
}

export default PersonList;
