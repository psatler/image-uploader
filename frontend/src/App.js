import React, { Component } from 'react';

import GlobalStyle from './styles/global';
import { Container, Content } from './styles'

class App extends Component {
  render() {
    return (
      <Container>
        <Content>
          teste
          <GlobalStyle />
        </Content>
      </Container>
    );
  }
}

export default App;
