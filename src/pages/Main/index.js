import React, { Component } from 'react';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';

import api from '../../services/api';
import Logo from '../img/Logo.png';

import {
  Container,
  Product,
  ProductImage,
  Title,
  Amount,
  CustomTouchable,
  CustomView,
  CustomViewCart,
  CustomText,
  HeaderView,
  LogoImage,
  ShoppingCart,
  CartText,
} from './styles';

// Animated.View Animated.Text, Animated.Image, Animated.ScrollView

export default class Main extends Component {
  static navigationOptions = {
    title: 'Home',
  };

  state = {
    products: [],
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  async componentDidMount() {
    console.tron.log('main:', this.props);
    const response = await api.get('products');

    const data = response.data.map(product => ({
      ...product,
    }));

    this.setState({
      products: data,
    });

    // console.tron.log(this.state);
  }

  render() {
    const { navigation } = this.props;

    const { products } = this.state;

    return (
      <Container>
        <HeaderView>
          <LogoImage source={Logo} />
          <ShoppingCart onPress={() => navigation.navigate('Cart')}>
            <CartText>3</CartText>
          </ShoppingCart>
        </HeaderView>
        <FlatList
          horizontal
          data={products}
          keyExtractor={product => String(product.id)}
          renderItem={({ item }) => (
            <Product>
              <ProductImage source={{ uri: item.image }} />
              <Title>{item.title}</Title>
              <Amount>{item.price}</Amount>
              <CustomTouchable>
                <CustomViewCart>
                  <CustomText>1</CustomText>
                </CustomViewCart>
                <CustomView>
                  <CustomText>ADICIONAR</CustomText>
                </CustomView>
              </CustomTouchable>
            </Product>
          )}
        />
      </Container>
    );
  }
}
