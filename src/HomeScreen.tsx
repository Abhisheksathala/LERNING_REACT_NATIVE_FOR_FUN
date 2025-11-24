import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { RootStackParamsList } from './RooteNavigator';

/**
 * types
 */

type HomScreenNavigationProp = StackNavigationProp<RootStackParamsList, 'Home'>;

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<HomScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="Stack navigation Demo"
        onPress={() => navigation.navigate('stackDemo')}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
