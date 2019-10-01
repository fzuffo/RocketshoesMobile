import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { FlatList } from 'react-native';
import PropTypes from 'prop-types';
import { formatPrice } from '../../util/format';
import api from '../../services/api';

import Header from '../Header/index';

import * as CartActions from '../../store/modules/cart/actions';

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
} from './styles';

// Animated.View Animated.Text, Animated.Image, Animated.ScrollView

class Main extends Component {
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
    const response = await api.get('products');

    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({
      products: data,
    });
  }

  handleAddProduct = product => {
    const { addToCart, navigation } = this.props;

    // dispatch({
    //   type: 'ADD_TO_CART',
    //   product,
    // });
    addToCart(product);

    navigation.navigate('Cart');
  };

  render() {
    const { products } = this.state;

    return (
      <Container>
        <Header />
        <FlatList
          horizontal
          data={products}
          keyExtractor={product => String(product.id)}
          renderItem={({ item }) => (
            <Product>
              <ProductImage source={{ uri: item.image }} />
              <Title>{item.title}</Title>
              <Amount>{item.priceFormatted}</Amount>
              <CustomTouchable
                onPress={() => {
                  this.handleAddProduct(item);
                }}
              >
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

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(Main);
