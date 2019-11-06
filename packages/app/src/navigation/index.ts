import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {Login} from '../screens/Login';
import {CategoryList} from '../screens/CategoryList';
import {Home} from '../screens/Home';
import {Favorites} from '../screens/Favorites';

const AuthStack = createStackNavigator(
  {
    login: Login,
  },
  {
    headerMode: 'none',
  },
);

const HomeStack = createStackNavigator({
  home: {screen: Home, navigationOptions: () => ({title: 'Home'})},
});

const TabNavigator = createBottomTabNavigator({
  home: HomeStack,
  categories: CategoryList,
  favorites: Favorites,
});

export default createAnimatedSwitchNavigator(
  {
    auth: AuthStack,
    app: TabNavigator,
  },
  {resetOnBlur: true},
);
