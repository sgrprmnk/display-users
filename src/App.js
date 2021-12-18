import React from "react";
import "./App.css";
import { useState, useEffect } from "react";

import Results from "./components/Results";

// class App extends React.Component {
//   state = {
//     results: [],
//   };
//   getRecipe = async (e) => {
//     //const resultName = e.target.elements.resultName.value;
//     e.preventDefault();
//     const api_call = await fetch("https://randomuser.me/api/?results=50");
//     const data = await api_call.json();
//     //console.log(data.results[0].id);
//     this.setState({ results: data.results });
//     console.log(this.state.results);
//   };
//   componentDidMount = () => {
//     const json = localStorage.getItem("results");
//     const results = JSON.parse(json);
//     this.setState({ results });
//   };

//   componentDidUpdate = () => {
//     const results = JSON.stringify(this.state.results);
//     localStorage.setItem("results", results);
//   };
const App = () => {
  const [result, setResult] = useState([]);
  useEffect(() => {
    const url = "https://randomuser.me/api/?results=50";
    fetch(url)
      .then((resp) => resp.json())
      .then((resp) => setResult(resp.results));
  }, []);

  // render() {
  return (
    <div className="App">
      <header>
        <h1>Contacts List</h1>
      </header>
      <Results results={result} />
      {/* <Results results={this.state.results} */}
    </div>
  );
};
//}
export default App;
