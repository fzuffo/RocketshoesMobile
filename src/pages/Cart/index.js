import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { TextInput, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Inicons from 'react-native-vector-icons/Ionicons';

import Header from '../Header/index';

import * as CartActions from '../../store/modules/cart/actions';

import {
  ShoppingList,
  ProductInfo,
  ProductImage,
  ProductTitle,
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
  CartItemBoxView,
} from './styles';

import { Container } from '../Main/styles';

function Cart({ cart, removeFromCart }) {
  return (
    <Container>
      <Header />

      <ShoppingList>
        <FlatList
          data={cart}
          keyExtractor={product => String(product.id)}
          renderItem={({ item }) => (
            <ProductInfo>
              <ProductDetailsView>
                <ProductImage source={{ uri: item.image }} />
                <ProductView>
                  <ProductTitle>{item.title}</ProductTitle>
                  <Amount>{item.priceFormatted}</Amount>
                </ProductView>
                <TouchableOpacity onPress={() => removeFromCart(item.id)}>
                  <Icon name="delete" size={20} color="#7159c1" />
                </TouchableOpacity>
              </ProductDetailsView>
              <CartInfoView>
                <CartItemBoxView>
                  <TouchableOpacity>
                    <Inicons
                      name="md-remove-circle-outline"
                      size={20}
                      color="#7159c1"
                    />
                  </TouchableOpacity>
                  <CartItemsBox>
                    <TextInput editable={false}>{item.amount}</TextInput>
                  </CartItemsBox>
                  <TouchableOpacity>
                    <Inicons
                      name="md-add-circle-outline"
                      size={20}
                      color="#7159c1"
                    />
                  </TouchableOpacity>
                </CartItemBoxView>
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

const mapStateToProps = state => ({
  cart: state.cart,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
