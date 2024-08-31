import { Component } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component'; // Importing SearchBox
import './App.css';



class App extends Component {

  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users =>
        this.setState(() => { return { monsters: users } }, () => console.log(this.state)))
  }

  onSearchChange = (event) => {
    console.log(event.target.value);
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => { return { searchField } });
  }

  render() {
    const { monsters, searchField } = this.state;
    const onSearchChange = this.onSearchChange;

    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLocaleLowerCase().includes(searchField)
    );

    return (
      <div className="App">
        <h1 className="app-title">Monster Rolodex</h1>
        <SearchBox className="monster-search-box" onChangeHandler={onSearchChange} placeholder="search monsters" /> 
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }

}

export default App;
