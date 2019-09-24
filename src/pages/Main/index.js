import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Container } from './styles';

export default class Main extends Component {
  static navigationOptions = {
    title: 'Main',
  };

  render() {
    return (
      <Container>
        <Text>Teste</Text>
      </Container>
    );
  }
}
