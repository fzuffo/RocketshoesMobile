import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  background: #191920;
`;

export const ShoppingList = styled.View`
  flex: 1;
  background: #fff;

  margin: 0 20px 90px 20px;
  border-radius: 4px;
`;

export const ProductInfo = styled.View`
  width: 305px;
  height: 130px;
  margin: 15px;
`;

export const ProductImage = styled.Image`
  width: 80px;
  height: 80px;
`;

export const ProductTitle = styled.Text`
  font-size: 14px;
  line-height: 18px;
  color: #333333;
  overflow: scroll;
`;

export const ProductDetailsView = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ProductView = styled.View`
  width: 163px;
  height: 60px;
  margin-left: 10px;
`;

export const CartInfoView = styled.View`
  flex: 1;
  flex-direction: row;
  height: 40px;
  background: #eeeeee;
  border-radius: 4px;
  justify-content: space-between;
  align-items: center;
  padding: 0 25px;
`;

export const CartItemBoxView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CartItemsBox = styled.View`
  width: 51px;
  height: 26px;
  background: #fff;

  border: 1px solid #ddd;
  border-radius: 4px;
  justify-content: center;
  margin: 0 10px;
  align-items: center;
`;

export const CartItems = styled.Text`
  margin-left: 12px;
  color: #666;
  font-size: 14px;
`;

export const CartTotal = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const Amount = styled.Text`
  font-size: 16px;
  color: #000;
  font-weight: bold;
`;

export const TotalView = styled.View`
  width: 100%;
  align-self: center;
  align-items: center;
  background: #fff;
`;

export const TotalText = styled.Text`
  margin-top: 30px;
  font-size: 16px;
  line-height: 19px;
  font-weight: bold;
  color: #999;
`;

export const TotalAmount = styled.Text`
  margin-top: 5px;
  font-size: 30px;
  font-weight: bold;
  text-align: right;
  color: #000;
`;

export const TouchableOpacityCustom = styled.TouchableOpacity`
  background: #7159c1;
  margin: 30px 10px 10px 10px;
  height: 42px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
`;

export const TextButton = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
`;
