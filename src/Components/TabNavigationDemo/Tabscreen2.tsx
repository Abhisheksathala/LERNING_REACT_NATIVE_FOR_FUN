import React from 'react';
import { View, Text, Button } from 'react-native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { BottomParamsList } from './TabscreenNavigationDemo';
import { useNavigation } from '@react-navigation/native';

type tabScreeNavigator = BottomTabNavigationProp<
  BottomParamsList,
  'TabScreen2'
>;

const Tabscreen2: React.FC = () => {
  const navigation = useNavigation<tabScreeNavigator>();

  return (
    <View>
      <Text>Tabscreen2</Text>
      <Button title="go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default Tabscreen2;
