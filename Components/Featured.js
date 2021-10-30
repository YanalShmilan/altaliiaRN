import React from 'react';
import Carousel from 'react-native-snap-carousel';
import books from '../books';
import BookItem from './BookItem';
const Featured = () => {
  renderItem = ({item, index}) => {
    return <BookItem book={item} />;
  };

  return (
    <Carousel
      layout="default"
      firstItem={Math.round((books.length - 1) / 2)}
      data={books}
      renderItem={renderItem}
      sliderWidth={400}
      itemWidth={100}
    />
  );
};

export default Featured;
