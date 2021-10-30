import {HStack, Text, Image, Box, Divider, Button} from 'native-base';
import React from 'react';
import {useDispatch} from 'react-redux';
import {
  addToCart,
  removeFromCart,
  removeOne,
} from '../store/actions/cartActions';

const CartItem = ({book}) => {
  const dispatch = useDispatch();
  return (
    <Box>
      <HStack w="100%" alignItems="center">
        <Button onPress={() => dispatch(addToCart(book))}>+</Button>
        <Text m="3">{book.quantity}</Text>
        <Button
          onPress={() => {
            if (book.quantity > 1) {
              dispatch(removeOne(book));
            } else {
              dispatch(removeFromCart(book));
            }
          }}>
          -
        </Button>
        <Divider m="3" orientation="vertical" />
        <Text w="20%">{book.price} د.أ</Text>
        <Divider m="3" orientation="vertical" />
        <Text w="25%">{book.title}</Text>
        <Image
          source={{
            uri: `${book.image}`,
          }}
          alt="Alternate Text"
          borderRadius="2"
          h="50"
          w="30"
          m="3"
        />
      </HStack>
    </Box>
  );
};

export default CartItem;
