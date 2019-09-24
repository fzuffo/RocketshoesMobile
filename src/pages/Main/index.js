import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import {
  Container,
  Header,
  LogoImage,
  Cart,
  CartText,
  ProductList,
} from './styles';

import Logo from '../img/Logo.png';

export default class Main extends Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
      <Container>
        <Header>
          <LogoImage source={Logo} />
          <Cart>
            <CartText>3</CartText>
          </Cart>
        </Header>

        <ProductList />
        <ProductList />
      </Container>
    );
  }
}
