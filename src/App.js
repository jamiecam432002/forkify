import React from "react";
import "./App.scss";
import Header from "./components/header/header";
import SearchResults from "./components/search-results/search-results";
import ShoppingList from "./components/shopping-list/shopping-list";
import Recipe from "./components/recipe/recipe";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="app-container">
          <SearchResults />
          <Recipe />
          <ShoppingList />
        </div>
      </div>
    );
  }
}

export default App;
