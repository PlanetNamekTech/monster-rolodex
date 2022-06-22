import './App.css';
import {Component} from 'react';
// import Card from '../src/components/Card'

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then((users) => this.setState(() => {
      return {monsters: users}
    }))
  }

  render() {

    return (
      <div className="App">
      {
        this.state.monsters.map((monster) => {
          return <h1 key={monster.id}>{monster.name}</h1>
        })
      }
      </div>
    );
  }
}

export default App;
