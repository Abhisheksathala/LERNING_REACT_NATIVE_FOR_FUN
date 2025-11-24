import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import StackS1 from './StackS1';
import StackS2 from './StackS2';

export type stackParamsList = {
  Stack1: undefined;
  Stack2: {
    itemId: number;
  };
};

const StackNavigationDemo: React.FC = () => {
  const stack = createStackNavigator<stackParamsList>();

  return (
    <stack.Navigator>
      <stack.Screen
        options={{ title: 'Stack Screen One' }}
        name="Stack1"
        component={StackS1}
      />
      <stack.Screen
        options={({ route }) => ({
          title: `item ${route.params.itemId}`,
        })}
        name="Stack2"
        component={StackS2}
      />
    </stack.Navigator>
  );
};

export default StackNavigationDemo;
