import React, { Component } from 'react';
import { Container, Carousel } from 'react-bootstrap';
import SearchForm from './components/SearchForm';
import Results from './components/Results';

class App extends Component {
  render() {
    return (
      <div >
        <Carousel>
          <container>
            <h1>Search App</h1>
            <p>This is a simple search app</p>

            <SearchForm />
          </container>
        </Carousel>
        <Results />
      </div>
    );
  }
}

export default App;
