import {Center, Icon, Input, VStack} from 'native-base';
import React from 'react';
import {View, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SearchScreen = () => {
  return (
    <VStack space={4} alignItems="center" w="100%">
      <Input
        placeholder="ابحث عن كتاب، مؤلف"
        mx="3"
        mt="3"
        isFullWidth={true}
        size="2xl"
        backgroundColor="#fff"
        variant="rounded"
        borderRadius="10"
        p={5}
        InputLeftElement={
          <Icon
            ml="2"
            size="5"
            color="gray.500"
            as={<Ionicons name="md-search-outline" />}
          />
        }
      />
    </VStack>
  );
};

export default SearchScreen;
