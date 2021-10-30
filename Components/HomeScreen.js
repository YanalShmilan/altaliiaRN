import React from 'react';
import {Text, Center, VStack, Divider, Box, ScrollView} from 'native-base';
import Featured from './Featured';
import Category from './Category';

const HomeScreen = ({navigation}) => {
  return (
    <ScrollView>
      <Box flex={1} px="3" mt="5" safeAreaTop>
        <VStack>
          <Center>
            <Text fontSize="md">كتب مميزة</Text>
            <Divider my="2" w="50%" />
            <Featured navigation={navigation} />
          </Center>
          <Category />
          <Category />
        </VStack>
      </Box>
    </ScrollView>
  );
};

export default HomeScreen;
