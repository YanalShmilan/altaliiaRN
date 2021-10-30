import {
  Center,
  HStack,
  VStack,
  Text,
  Divider,
  Flex,
  Box,
  Button,
} from 'native-base';
import React from 'react';
import books from '../books';
import BookItem from './BookItem';
const Category = () => {
  const _books = books.map(book => <BookItem book={book} />);
  return (
    <Box>
      <Divider my="2" w="100%" />
      <Text fontSize="md">وصل حديثا</Text>
      <Divider my="2" w="100%" />
      <VStack alignItems="center">
        <Flex w="100%" direction="row" justifyContent="space-around">
          {_books[0]}
          {_books[1]}
          {_books[2]}
        </Flex>
        <Divider my="2" w="50%" />

        <Flex w="100%" direction="row" justifyContent="space-around">
          {_books[2]}
          {_books[3]}
          {_books[4]}
        </Flex>
      </VStack>
      <Text fontSize="md" style={{textAlign: 'left'}}>
        المزيد ...
      </Text>
    </Box>
  );
};

export default Category;
