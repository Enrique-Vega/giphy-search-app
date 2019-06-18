import React, { Component } from 'react';
import GifList from './components/GifList'
// import { CardColumns, Row } from 'reactstrap'
import request from 'superagent'
import PrimarySearchAppBar from './components/SearchComponent'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
      this.state = {
        gifs: [],
        inputTyped: false
      }
  }

  handleTermChange = (term) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=JYeB6d7u6EGs42KKySigrUemq4zLR0ru&q=${term.replace(/\s/g, '+')}&limit=25&offset=0&rating=G&lang=en`;

    request.get(url, (err, res) => {
      // console.log(res.body.data[0]);
      this.setState({ gifs: res.body.data, inputTyped: !this.state.inputTyped })
    });
    console.log("TYPING " + this.state.inputTyped)
  }

  render() {
    return (
      <div>
        <PrimarySearchAppBar onTermChange={term => this.handleTermChange(term)}/>

      
        {!!this.state.inputTyped 
          ? <div style={{border: 'solid red 1px', height: '100%'}}>
              <GifList gifs={this.state.gifs} style={{height: '100%'}}/> 
            </div>
          : <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100vh'
              }}>
              <h1>Search for something!</h1>
            </div>}


      </div>
    );
  }
}

export default App;
