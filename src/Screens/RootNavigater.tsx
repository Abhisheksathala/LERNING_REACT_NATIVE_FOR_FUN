import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';

export type RootStackParamsList = {
  Home: undefined;
};

const stack = createStackNavigator<RootStackParamsList>();

const RootNavigater2: React.FC = () => {
  return (
    <stack.Navigator>
      <stack.Screen name="Home" component={HomeScreen} />
    </stack.Navigator>
  );
};

export default RootNavigater2;
