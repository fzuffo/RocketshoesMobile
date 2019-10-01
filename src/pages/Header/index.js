import React from 'react';
import { connect } from 'react-redux';

import { HeaderView, LogoImage, Cart, CartText } from './styles';
import Logo from '../img/Logo.png';

function Header({ cartSize }) {
  return (
    <HeaderView>
      <LogoImage source={Logo} />
      <Cart>
        <CartText>{cartSize}</CartText>
      </Cart>
    </HeaderView>
  );
}

export default connect(state => ({
  cartSize: state.cart.length,
}))(Header);
