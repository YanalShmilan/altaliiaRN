import {
  VStack,
  Text,
  Image,
  Center,
  Divider,
  Button,
  ScrollView,
} from 'native-base';
import React from 'react';
import {useSelector} from 'react-redux';
import {useRoute} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {addToCart} from '../store/actions/cartActions';

const BookDetail = () => {
  const route = useRoute();
  const books = useSelector(state => state.categoreis.books);
  const book = books.find(book => book?._id == +route?.params?.bookId);
  const dispatch = useDispatch();

  return (
    <ScrollView>
      <VStack w="100%" p="5">
        <Center>
          <Image
            source={{
              uri: `${book?.image}`,
            }}
            alt="Alternate Text"
            borderRadius="10"
            h="150"
            w="100"
            mt="5"
          />
          <Divider my="3" />
        </Center>
        <Text style={{textAlign: 'right'}} fontSize="md">
          عنوان الكتاب: {book?.title}
        </Text>
        <Divider my="3" />
        <Text style={{textAlign: 'right'}} fontSize="md">
          مؤلف الكتاب: {book?.author}
        </Text>
        <Divider my="3" />
        <Text style={{textAlign: 'right'}} fontSize="md">
          وصف الكتاب: {book?.description}
        </Text>
        <Divider my="3" />
        <Text style={{textAlign: 'right'}} fontSize="md">
          التصنيفات: {book?.category.join(' , ')}
        </Text>
        <Divider my="3" />
        <Text style={{textAlign: 'right'}} fontSize="md">
          السعر: {book?.price} د.أ
        </Text>
        <Divider my="3" />
        <Button
          onPress={() =>
            dispatch(
              addToCart({
                _id: book._id,
                title: book.title,
                image: book.image,
                quantity: 1,
                price: book.price,
              }),
            )
          }>
          إضافة إلى السلة
        </Button>
      </VStack>
    </ScrollView>
  );
};

export default BookDetail;
