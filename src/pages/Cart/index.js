import React, { Component } from 'react';
import { View, TextInput, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import api from '../../services/api';
import Logo from '../img/Logo.png';

import {
  ShoppingList,
  ProductInfo,
  ProductImage,
  ProductTitle,
  CartItems,
  Amount,
  TotalText,
  TotalAmount,
  TotalView,
  CartTotal,
  CartInfoView,
  ProductDetailsView,
  ProductView,
  CartItemsBox,
  TouchableOpacityCustom,
  TextButton,
} from './styles';

import {
  Container,
  HeaderView,
  LogoImage,
  ShoppingCart,
  CartText,
} from '../Main/styles';

export default class Cart extends Component {
  static navigationOptions = {
    title: 'Cart',
  };

  state = {
    products: [],
  };

  // static propTypes = {
  //   navigation: PropTypes.shape({
  //     navigate: PropTypes.func,
  //   }).isRequired,
  // };

  async componentDidMount() {
    const response = await api.get('products');

    const data = response.data.map(product => ({
      ...product,
    }));

    this.setState({
      products: data,
    });
  }

  render() {
    // const { navigation } = this.props;

    const { products } = this.state;

    return (
      <Container>
        <HeaderView>
          <LogoImage source={Logo} />
          <ShoppingCart>
            <CartText>3</CartText>
          </ShoppingCart>
        </HeaderView>

        <ShoppingList>
          <FlatList
            data={products}
            keyExtractor={product => String(product.id)}
            renderItem={({ item }) => (
              <ProductInfo>
                <ProductDetailsView>
                  <ProductImage source={{ uri: item.image }} />
                  <ProductView>
                    <ProductTitle>{item.title}</ProductTitle>
                    <Amount>{item.price}</Amount>
                  </ProductView>
                </ProductDetailsView>
                <CartInfoView>
                  <CartItemsBox>
                    <TextInput placeholder="Qtd" />
                  </CartItemsBox>
                  <CartTotal>R$539,70</CartTotal>
                </CartInfoView>
              </ProductInfo>
            )}
          />
          <TotalView>
            <TotalText>TOTAL</TotalText>
            <TotalAmount>R$ 1619,10</TotalAmount>
          </TotalView>
          <TouchableOpacityCustom>
            <TextButton> FINALIZAR PEDIDO</TextButton>
          </TouchableOpacityCustom>
        </ShoppingList>
      </Container>
    );
  }
}
