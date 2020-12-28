import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';


//Navs
import MainTabNav from './MainTabNav'

const MainNav = () => {
  return (
    <NavigationContainer>
      <MainTabNav />
    </NavigationContainer>
  );
}

export default MainNav;