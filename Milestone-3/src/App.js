import React, { useState } from "react";
import "./components/style.css"
import CardList from "./components/CardList";
import SearchBar from "./components/SearchBar";

import MovieSource from "./api/MovieSource";

function App() {
  const [state, setState] = useState({
    results: []
  });

  const onSearch = async (text) => {
    const results = await MovieSource.get("/", {
      params: { s: text, i: "tt3896198", apiKey: "36dbd02" },
    });

    setState(prevState => {
      return { ...prevState, results: results }
    })
  };

  return (
    <div className="App">
      <div className="container searchApp">
        <h2 className="title is-2 has-text-centered">
          MOVIE FINDER
        </h2>
        <SearchBar onSearch={onSearch} />
        <CardList results={state.results} />
      </div>
    </div>
  );
}

export default App;