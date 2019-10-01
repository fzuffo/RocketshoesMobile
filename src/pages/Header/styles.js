import styled from 'styled-components';

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

export const Cart = styled.TouchableOpacity`
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
