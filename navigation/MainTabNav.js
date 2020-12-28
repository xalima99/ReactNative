import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MainStackNav from './MainStackNav'
import { HeaderTitle } from '@react-navigation/stack';

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={MainStackNav}/>
      <Tab.Screen name="Settings" component={MainStackNav} />
    </Tab.Navigator>
  );
}

export default MyTabs