import './App.css';
// import {Component} from 'react';
import { useState, useEffect } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
// import Card from '../src/components/Card'

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState('');
  const [filteredArray, setFilterArray] = useState(monsters);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredArray = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });

    setFilterArray(newFilteredArray);
  }, [monsters, searchField])

  const onSearchChange = (event) => {
        const searchFieldString = event.target.value.toLowerCase();
        setSearchField(searchFieldString);
      }

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox 
        onChangeHandler={onSearchChange} 
        placeholder='search monsters' 
        className='monsters-search-box' 
      />
      <CardList monsters={filteredArray}/>
      </div>
  )
}

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: ''
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then(response => response.json())
//     .then((users) => this.setState(() => {
//       return {monsters: users}
//     }))
//   }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLowerCase();
//     this.setState(() => {
//       return { searchField }
//     });
//   }

//   render() {

//     const { monsters, searchField } = this.state,
//           { onSearchChange } = this;

//     const filteredArray = monsters.filter((monster) => {
//       return monster.name.toLowerCase().includes(searchField);
//     });

//     return (
//       <div className="App">
//         <h1 className="app-title">Monsters Rolodex</h1>
//         <SearchBox 
//           onChangeHandler={onSearchChange} 
//           placeholder='search monsters' 
//           className='monsters-search-box' 
//         />
//         <CardList monsters={filteredArray}/>
//       </div>
//     );
//   }
// }

export default App;
