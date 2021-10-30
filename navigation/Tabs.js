import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Badge, Box, Center, Text} from 'native-base';
import BookDetail from '../Components/BookDetail';
import HomeScreen from '../Components/HomeScreen';
import SearchScreen from '../Components/SearchScreen';
import CartScreen from '../Components/CartScreen';
import {useSelector} from 'react-redux';
const Tab = createBottomTabNavigator();

const Tabs = () => {
  const items = useSelector(state => state.cart.items);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 15,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: '#fff',
          borderRadius: 15,
          height: 90,
          ...styles.shadow,
        },
      }}>
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Center>
              <Badge
                bg="red.400"
                colorScheme="danger"
                rounded="999px"
                mb={-4}
                mr={-4}
                zIndex={1}
                variant="solid"
                alignSelf="flex-end"
                _text={{
                  fontSize: 12,
                }}>
                {items.length}
              </Badge>

              <MaterialIcons name="shopping-cart" color={color} size={size} />
              <Text>العربة</Text>
            </Center>
          ),
        }}
      />
      <Tab.Screen
        name="Category"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Center>
              <MaterialIcons name="category" color={color} size={size} />
              <Text>التصنيفات</Text>
            </Center>
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Center>
              <Ionicons name="md-search-outline" color={color} size={size} />
              <Text>البحث</Text>
            </Center>
          ),
        }}
      />
      <Tab.Screen
        name="Home3"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Center>
              <MaterialCommunityIcons name="home" color={color} size={size} />
              <Text>الرئيسية</Text>
            </Center>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
export default Tabs;
