import React, { Component } from "react";
import "./App.scss";

import Header from './components/header/header.component';
import Card from "./components/card/card.component";

const USERS_URL = "https://jsonplaceholder.typicode.com/users";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      users: [],
      searchLabel: '',
    };
  }

  componentDidMount() {
    fetch(USERS_URL)
        .then((data) => data.json())
        .then((users) => this.setState({users}));
  }

  handleSearch = (value) => {
    const search = value.trim();
    this.setState({
      searchLabel: search,
    });
  }

  render() {
    const { users, searchLabel } = this.state;
    return (
        <div className="App">
          <h1>Monster rolodex</h1>
          <Header placeHolder={'Search monster'} handleSearch={this.handleSearch}/>
          {
            users.length ?
                <div className={'card-list'}>
                  {
                    users.map(({name, id, email}) => {
                      if (searchLabel.length !== 0){
                        const idx = name.indexOf(searchLabel);
                        if (idx === -1) return null;
                      }
                      return <Card key={id} name={name} email={email} id={id}/>
                    })
                  }
                </div>
                 :
                <div className="lds-dual-ring"/>
          }
        </div>
    );
  }
}

export default App;
