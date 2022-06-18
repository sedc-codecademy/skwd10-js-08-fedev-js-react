import React from "react";
import axios from "axios";
import PersonList from "../../Components/PersonList/PersonList";
import PersonDetails from "../../Components/PersonDetails/PersonDetails";
import Button from "../../Components/Button/Button";
import "./PeoplePage.css";

const SWAPI_URL = "https://swapi.dev/api/people";

class PeoplePage extends React.Component {
  constructor(props) {
    super(props);

    console.log("Constructor Called");

    this.state = {
      triggerRerender: false,
      peopleData: null,
      selectedPersonData: null,
      isPersonDetailsShown: true,
    };
  }

  componentDidMount() {
    //Only exected whenever the component is mounted for the first time
    console.log("Component Mounted");
    //Http calls using axios
    axios.get(SWAPI_URL).then(response => {
      this.setState({
        peopleData: response.data.results,
      });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    //Executed whenever the component state changes or the props of the component change
    console.log("Component Updated");
  }

  onToggleState() {
    this.setState(prevState => {
      return {
        triggerRerender: !prevState.triggerRerender,
      };
    });
  }

  onPersonSelect(selectedIndex) {
    this.setState(prevState => ({
      selectedPersonData: prevState.peopleData[selectedIndex],
    }));
  }

  onPersonDetailsToggle() {
    this.setState(prevState => {
      return {
        isPersonDetailsShown: !prevState.isPersonDetailsShown,
      };
    });
  }

  render() {
    console.log("Render Method Called");
    return (
      <section className="page">
        <div className="page__heading">
          <h2>People of Star Wars</h2>
          <p>Click on a person name in the list below to see their details</p>
        </div>
        {/* <button onClick={this.onToggleState.bind(this)}>
          Update Component State!
        </button> */}
        <Button
          buttonText="Toggle Person Details"
          style={{ marginLeft: "30px" }}
          onButtonClick={this.onPersonDetailsToggle.bind(this)}
        />
        <div className="People__container">
          <PersonList
            peopleData={this.state.peopleData}
            onListItemClick={this.onPersonSelect.bind(this)}
            selectedPersonName={this.state.selectedPersonData?.name}
          />
          {this.state.isPersonDetailsShown && (
            <PersonDetails selectedPersonData={this.state.selectedPersonData} />
          )}
        </div>
        {/* Original basic HTTP conditional rendering logic */}
        {/* {!this.state.peopleData && <div>Loading...</div>}
        {this.state.peopleData && (
          <ul>
            {this.state.peopleData.map((person, i) => (
              <li key={person.name + i}>{person.name}</li>
            ))}
          </ul>
        )} */}
      </section>
    );
  }
}

export default PeoplePage;
