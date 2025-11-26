import { useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { View, Text, Button } from 'react-native';
import { stackParamsList } from './StackNavigationDemo';
import { RouteProp } from '@react-navigation/native';

/**
 * types
 */

type StackScreen2navigationProps = StackNavigationProp<
  stackParamsList,
  'Stack2'
>;

type StackScreen2RouteProps = RouteProp<stackParamsList, 'Stack2'>;

const StackS2: React.FC = () => {
  const navigat = useNavigation<StackScreen2navigationProps>();
  const route = useRoute<StackScreen2RouteProps>();
  return (
    <View>
      <Text>Stack 2</Text>
      <Text>Item ID : {route.params.itemId}</Text>
      <Button title="stack 1 forword " onPress={() => navigat.goBack()} />
    </View>
  );
};

export default StackS2;
