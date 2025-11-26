import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import StackNavigationDemo from './Components/StackNavigationDemo/StackNavigationDemo';

/**
 * types@
 */

export type RootStackParamsList = {
  Home: undefined;
  stackDemo: undefined;
};

// create an stack navigater here
const stack = createStackNavigator<RootStackParamsList>();

const RooteNavigator: React.FC = () => {
  return (
    <stack.Navigator>
      <stack.Screen name="Home" component={HomeScreen} />
      <stack.Screen name="stackDemo" component={StackNavigationDemo} />
    </stack.Navigator>
  );
};

export default RooteNavigator;
