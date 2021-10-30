import {
  VStack,
  Text,
  Box,
  Center,
  Divider,
  ScrollView,
  Button,
} from 'native-base';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import books from '../books';
import {clearCart} from '../store/actions/cartActions';
import CartItem from './CartItem';
const CartScreen = () => {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const cartItems = items.map(book => <CartItem book={book} />);
  return (
    <Box w="100%" h="83%" p="5">
      <ScrollView>
        <Center>
          <Text fontSize="lg">العربة</Text>
          <Divider m="3" />
        </Center>
        <VStack alignItems="flex-end">{cartItems}</VStack>
        <Divider m="3" />
        <Button isDisabled={items.length === 0 ? true : false}>
          إتمام عملية الشراء
        </Button>
        <Divider m="3" />
        <Button
          isDisabled={items.length === 0 ? true : false}
          onPress={() => dispatch(clearCart())}>
          حذف العربة
        </Button>
      </ScrollView>
    </Box>
  );
};

export default CartScreen;
