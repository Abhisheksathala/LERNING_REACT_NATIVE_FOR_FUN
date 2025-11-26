import React from 'react';
import { View, Text, Button } from 'react-native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { BottomParamsList } from './TabscreenNavigationDemo';
import { useNavigation } from '@react-navigation/native';

type tabScreeNavigator = BottomTabNavigationProp<
  BottomParamsList,
  'TabScreen1'
>;

const TabScreen: React.FC = () => {
  const navigation = useNavigation<tabScreeNavigator>();

  return (
    <View>
      <Text>Tabscreen1</Text>
      <Button
        title="Go To Tab 2"
        onPress={() => navigation.navigate('TabScreen2')}
      />
    </View>
  );
};

export default TabScreen;
