import styled from 'styled-components/native';
import { darken } from 'polished';

// HEADER START
export const HeaderView = styled.View`
  background: #000;
  height: 84px;
  padding: 20px;
  /* border: 1px solid #dd1; */
  align-items: flex-start; /* vertical */
  flex-direction: row;
  justify-content: space-between; /* horizontal */
  margin-bottom: 20px;
`;

export const LogoImage = styled.Image`
  width: 185px;
  height: 24px;
`;

export const ShoppingCart = styled.TouchableOpacity`
  width: 20px;
  height: 20px;
  background: #7159c1;
  border-radius: 16px;
  align-items: center;
  justify-content: center;
`;

export const CartText = styled.Text`
  color: #fff;
  font-size: 12px;
`;
// HEADER END

export const Container = styled.View`
  flex: 1;
  background: #191920;
`;

export const Product = styled.View`
  flex: 1;
  background: #fff;
  margin-right: 35px;
  width: 220px;
  height: 380px;
`;

export const ProductImage = styled.Image`
  width: 200px;
  height: 200px;
  margin: 10px;
`;

export const Title = styled.Text`
  margin: 10px 10px 0 10px;
  font-size: 16px;
  line-height: 21px;
  max-height: 42px;
  overflow: scroll;
`;

export const Amount = styled.Text`
  margin: 5px 5px 0 10px;
  font-size: 21px;
  font-weight: bold;
  line-height: 25px;
`;

export const CustomTouchable = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin: 10px;
  background-color: #7159c1;
  height: 42px;
  border-radius: 5px;
`;

export const CustomViewCart = styled.View`
  flex-direction: row;
  height: 100%;
  width: 33%;
  background: ${darken(0.05, '#7159c1')};
  align-items: center;
  justify-content: space-around;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  padding: 10px;
`;

export const CustomView = styled.View`
  width: 67%;
`;

export const CustomText = styled.Text`
  text-align: center;
  align-content: center;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
`;
