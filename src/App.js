import React, { Component } from 'react';
import { Container, Carousel } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div >
        <Carousel>
          <Container>
            <h1>Search App</h1>
            <p>This is a simple search app</p>
          </Container>
        </Carousel>
      </div>
    );
  }
}

export default App;
