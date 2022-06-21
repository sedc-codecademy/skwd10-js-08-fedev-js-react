import React, { useState, useEffect } from "react";
import "./App.css";
import useFetchAsync from "./hooks/useFetchAsync";

const App = () => {
  const [selectedTab, setSelectedTab] = useState("login");

  return (
    <div>
      <div>
        <button onClick={() => setSelectedTab("login")}>LOGIN</button>
        <button onClick={() => setSelectedTab("home")}>HOME</button>
      </div>
      {selectedTab === "login" ? <Login /> : <Home />}
    </div>
  );
};

const Home = () => {
  return <div>Home</div>;
};

const Login = (props) => {
  // const [userInfo, setUserInfo] = useState({});
  const [firstName, setFirstName] = useState("");
  const [userPas, setUserPas] = useState("");
  // const [age, setAge] = useState();
  const [peopleData, setPeopleData, isLoading] = useFetchAsync(
    "https://swapi.dev/api/people/",
    {}
  );
  console.log(peopleData);
  // useEffect(() => {
  //   let isMounted = true;
  //   fetch("https://swapi.dev/api/people/")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (isMounted) {
  //         setPeople(data.results);
  //       }
  //     })
  //     .catch((err) => console.log(err));
  //   const interval = setInterval(
  //     () => console.log("I AM WORKING IN BACKGROUND"),
  //     1000
  //   );

  //   return () => {
  //     console.log("UNMOUNT");
  //     isMounted = false;
  //     clearInterval(interval);
  //   };
  // }, []);

  // useEffect(() => {
  //   console.log("USER NAME HAS UPDATED NEW VALUE: ", firstName);
  // }, [firstName]);

  // useEffect(() => {
  //   console.log("USER PASSWORD HAS UPDATED NEW VALUE: ", userPas);
  // }, [userPas]);

  // useEffect(() => {
  //   console.log("I DONT CARE IF IT WAS FIRST NAME OR PASSWORD");
  // }, [firstName, userPas, props.whatever]);

  console.log(peopleData);
  if (isLoading) {
    return <div>Loading....</div>;
  }
  return (
    <div>
      {peopleData.results &&
        peopleData.results.map((person, i) => <div key={i}>{person.name}</div>)}
      {/* <h1>{userInfo.firstName || ""}</h1>
      <h1>{userInfo.lastName || ""}</h1>
      <input
        type="text"
        onChange={(e) =>
          setUserInfo({ ...userInfo, firstName: e.target.value })
        }
        value={userInfo.firstName}
      />
      <input
        type="text"
        onChange={(e) => setUserInfo({ ...userInfo, lastName: e.target.value })}
        value={userInfo.lastName}
      /> */}
      {/* <h1>{userName}</h1>
      <input
        type="text"
        onChange={(e) => setUserName(e.target.value)}
        value={userName}
      />
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      /> */}
      <input
        type="text"
        onChange={(e) => setFirstName(e.target.value)}
        value={firstName}
      />
      <input
        type="password"
        onChange={(e) => setUserPas(e.target.value)}
        value={userPas}
      />
    </div>
  );
};

export default App;
