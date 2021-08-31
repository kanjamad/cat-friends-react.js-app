# Cat friends

## Tech Stack
---
- HTML
- CSS
- Javascript
- React.js
- React Hooks
- ESlint
- Prettier

## Example Using Classes

```
import React, { Component } from "react";
import CardList from "../components/CardList/CardLists";
import SearchBox from "../components/SearchBox/SearchBox";
import Scroll from "../components/Scroll";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {this.setState({ robots: users })});
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    return !robots.length ? (
      <h1>Loading</h1>
    ) : (
      <div className="App">
        <h1>Cat Friends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
}

export default App;

```

## Example Using Hooks
```
import React, { useState, useEffect } from "react";
import CardList from "../components/CardList/CardLists";
import SearchBox from "../components/SearchBox/SearchBox";
import Scroll from "../components/Scroll";
import "./App.css";

function App() {
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState("");

  useEffect(() => {
    // Update the document title using the browser API
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {setRobots(users)});
  }, []);

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  };

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  });
  return !robots.length ? (
    <h1>Loading</h1>
  ) : (
    <div className="App">
      <h1>Cat Friends</h1>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <CardList robots={filteredRobots} />
      </Scroll>
    </div>
  );
}

export default App;

```


## External API used
---
- https://jsonplaceholder.typicode.com/users

## Deploying React APP
- https://create-react-app.dev/docs/deployment/#github-pages
- https://reactjs.org/docs/hooks-intro.html


## Additional Resources
1. <a href="https://create-react-app.dev/docs/deployment/#github-pages" target="_blank">Deploying React APP</a>
2. <a href="https://reactjs.org/docs/hooks-intro.html" target="_blank">Document Hooks</a>
