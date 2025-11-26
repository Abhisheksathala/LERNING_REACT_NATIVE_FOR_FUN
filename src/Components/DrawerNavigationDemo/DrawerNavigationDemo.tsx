import React from 'react';
import { View, Button, Text } from 'react-native';
import {
  createDrawerNavigator,
  DrawerScreenProps,
} from '@react-navigation/drawer';

export type DrawerParamsList = {
  DrawerScreen1: undefined;
  DrawerScreen2: undefined;
};

type Screen1Props = DrawerScreenProps<DrawerParamsList, 'DrawerScreen1'>;
type Screen2Props = DrawerScreenProps<DrawerParamsList, 'DrawerScreen2'>;

const DrawerScreen1: React.FC<Screen1Props> = ({ navigation }) => {
  return (
    <View>
      <Text>DrawerScreen1</Text>
      <Button title="Open Drawer" onPress={() => navigation.openDrawer()} />
    </View>
  );
};

const DrawerScreen2: React.FC<Screen2Props> = ({ navigation }) => {
  return (
    <View>
      <Text>DrawerScreen2</Text>
      <Button title="Open Drawer" onPress={() => navigation.openDrawer()} />
    </View>
  );
};

const DrawerNavigationDemo: React.FC = () => {
  const Drawer = createDrawerNavigator<DrawerParamsList>();

  return (
    <Drawer.Navigator>
      <Drawer.Screen name="DrawerScreen1" component={DrawerScreen1} />
      <Drawer.Screen name="DrawerScreen2" component={DrawerScreen2} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigationDemo;
