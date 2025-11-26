import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabScreen from './TabScreen';
import Tabscreen2 from './Tabscreen2';

export type BottomParamsList = {
  TabScreen1: undefined;
  TabScreen2: undefined;
};

const TabscreenNavigationDemo: React.FC = () => {
  const BottomTab = createBottomTabNavigator<BottomParamsList>();
  return (
    <>
      <BottomTab.Navigator>
        <BottomTab.Screen name="TabScreen1" component={TabScreen} />
        <BottomTab.Screen name="TabScreen2" component={Tabscreen2} />
      </BottomTab.Navigator>
    </>
  );
};

export default TabscreenNavigationDemo;
