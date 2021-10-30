import {VStack, Box, Image, Text, Divider, Pressable} from 'native-base';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const BookItem = ({book}) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() =>
        navigation.navigate('Detail', {bookId: book._id, title: book.title})
      }>
      <Box>
        <VStack>
          <Image
            source={{
              uri: `${book.image}`,
            }}
            alt="Alternate Text"
            borderRadius="10"
            h="150"
            w="100"
          />
          <Text>{book.title}</Text>
          <Text>{book.price} د.أ</Text>
        </VStack>
      </Box>
    </Pressable>
  );
};

export default BookItem;
