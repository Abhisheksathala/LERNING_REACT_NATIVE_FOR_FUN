import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { View, Text, Button } from 'react-native';
import { stackParamsList } from './StackNavigationDemo';

/**
 * types
 */

type StackScreen1navigationProps = StackNavigationProp<
  stackParamsList,
  'Stack1'
>;

const StackS1: React.FC = () => {
  const navigation = useNavigation<StackScreen1navigationProps>();

  return (
    <View>
      <Text>Stack 1</Text>
      <Button
        title="Go To stack 2  "
        onPress={() => navigation.navigate('Stack2', { itemId: 200 })}
      />
    </View>
  );
};

export default StackS1;
