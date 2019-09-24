import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #191920;
`;

export const Header = styled.View`
  background: #000;
  height: 84px;
  padding: 20px;
  /* margin: 0; */
  /* border: 1px solid #dd1; */
  align-items: flex-start; /* vertical */
  flex-direction: row;
  justify-content: space-between; /* horizontal */
`;

export const LogoImage = styled.Image`
  width: 185px;
  height: 24px;
`;

export const Cart = styled.View`
  width: 20px;
  height: 20px;
  background: #7159c1;
  border-radius: 16px;
  /* align-content: center; */
  align-items: center;
  justify-content: center;
`;

export const CartText = styled.Text`
  color: #fff;
  font-size: 12px;
`;

export const ProductList = styled.View`
  width: 220px;
  height: 358px;
  background: #fff;
  margin-top: 20px;
  margin-right: 35px;
  flex-direction: row;
`;
