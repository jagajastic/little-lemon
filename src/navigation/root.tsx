import React from 'react';
import { Stack } from './stack';
import Landing from '../screens/Landing';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import { Image, Pressable, View } from 'react-native';

const RootNavigator = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="Landing">
      <Stack.Screen
        name="Landing"
        component={Landing}
        options={{
          headerTitle: props => (
            <Image
              source={require('../../assets/Logo.png')}
              style={{ width: 150, height: 40 }}
            />
          ),
          headerRight: props => (
            <View
              style={{
                width: 30,
                height: 30,
                borderRadius: 30,
                backgroundColor: 'red',
                overflow: 'hidden',
              }}>
              <Image
                resizeMode="cover"
                style={{ width: '100%', height: 30 }}
                source={require('../../assets/Profile.png')}
              />
            </View>
          ),
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: props => (
            <Image
              source={require('../../assets/Logo.png')}
              style={{ width: 150, height: 40 }}
            />
          ),
          headerRight: props => (
            <View
              style={{
                width: 30,
                height: 30,
                borderRadius: 30,
                backgroundColor: 'red',
                overflow: 'hidden',
              }}>
              <Image
                resizeMode="cover"
                style={{ width: '100%', height: 30 }}
                source={require('../../assets/Profile.png')}
              />
            </View>
          ),
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerTitle: props => (
            <Image
              source={require('../../assets/Logo.png')}
              style={{ width: 150, height: 40 }}
            />
          ),
          headerRight: props => (
            <View
              style={{
                width: 24,
                height: 24,
                borderRadius: 30,
                backgroundColor: 'red',
                overflow: 'hidden',
              }}>
              <Image
                resizeMode="cover"
                style={{ width: '100%', height: 30 }}
                source={require('../../assets/Profile.png')}
              />
            </View>
          ),
          headerTransparent: true,
          headerLeft: props => (
            <Pressable style={{
              width: 30,
              height: 30,
              backgroundColor: '#495E57',
              borderRadius: 30,
              justifyContent: 'center',
              alignItems: 'center',
              
            }}
            onPress={() => navigation}
            >
             <Image source={require("../../assets/arrow_down.png")} style={{width: 12, height: 12}} />
            </Pressable>
          )
        }}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
