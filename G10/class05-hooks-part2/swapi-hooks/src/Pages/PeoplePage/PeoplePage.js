import { useState, useEffect } from "react";
import axios from "axios";
import PersonList from "../../Components/PersonList/PersonList";
import PersonDetails from "../../Components/PersonDetails/PersonDetails";
import Button from "../../Components/Button/Button";
import "./PeoplePage.css";

const SWAPI_URL = "https://swapi.dev/api/people";

const PeoplePage = () => {
  const [peopleData, setPeopleData] = useState(null);
  const [selectedPersonData, setSelectedPersonData] = useState(null);
  const [isPersonDetailsShown, setIsPersonDetailsShown] = useState(true);

  //*Correct way to fetch data on first component render
  useEffect(() => {
    axios.get(SWAPI_URL).then(response => {
      setPeopleData(prevPeopleData => response.data.results);
    });
  }, []);

  //! Don't set already existing depenedencies in the same useEffect as they are declared
  // useEffect(() => {
  //   axios.get(SWAPI_URL).then(response => {
  //     setPeopleData(prevPeopleData => response.data.results);
  //   });
  // }, [peopleData]);

  //* Function that only runs when peopleData changes
  // useEffect(() => {
  //   console.log("From the peopleData dependancy useEffect");
  //   console.log(peopleData);
  // }, [peopleData]);

  useEffect(() => {
    console.log("Selected person changed");
    if (selectedPersonData) {
      axios.get(selectedPersonData.url).then(response => {
        console.log(response.data);
      });
    }
  }, [selectedPersonData]);

  const onPersonSelect = selectedIndex => {
    setSelectedPersonData(prevPersonData => peopleData[selectedIndex]);
  };

  const onPersonDetailsToggle = () => {
    setIsPersonDetailsShown(prevValue => !prevValue);
  };

  return (
    <section className="page">
      <div className="page__heading">
        <h2>People of Star Wars</h2>
        <p>Click on a person name in the list below to see their details</p>
      </div>
      <Button
        buttonText="Toggle Person Details"
        style={{ marginLeft: "30px" }}
        onButtonClick={onPersonDetailsToggle}
      />
      <div className="People__container">
        <PersonList
          peopleData={peopleData}
          onListItemClick={onPersonSelect}
          selectedPersonName={selectedPersonData?.name}
        />
        {isPersonDetailsShown && (
          <PersonDetails selectedPersonData={selectedPersonData} />
        )}
      </div>
    </section>
  );
};

export default PeoplePage;
