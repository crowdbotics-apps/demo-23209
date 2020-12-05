import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps182297Navigator from '../features/Maps182297/navigator';
import Settings182275Navigator from '../features/Settings182275/navigator';
import Settings182260Navigator from '../features/Settings182260/navigator';
import NotificationList182259Navigator from '../features/NotificationList182259/navigator';
import Maps182258Navigator from '../features/Maps182258/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps182297: { screen: Maps182297Navigator },
Settings182275: { screen: Settings182275Navigator },
Settings182260: { screen: Settings182260Navigator },
NotificationList182259: { screen: NotificationList182259Navigator },
Maps182258: { screen: Maps182258Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
