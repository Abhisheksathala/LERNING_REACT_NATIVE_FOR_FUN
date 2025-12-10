import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamsList } from './RootNavigater';
import { useNavigation } from '@react-navigation/native';

type HomeScreenStack = StackNavigationProp<RootStackParamsList, 'Home'>;

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<HomeScreenStack>();

  return (
    <View>
      <Text>Homescreen</Text>
      <Button title="somthing..." onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default HomeScreen;
