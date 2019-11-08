import React from 'react';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator, BottomTabBar} from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {Login} from '../screens/Login';
import {CategoryList} from '../screens/CategoryList';
import {Home} from '../screens/Home';
import {RecipeList} from '../screens/RecipeList';
import {Settings} from '../screens/Settings';
import {getCategory} from '../helpers/recipeHelper';

const headerOptions = {
  headerTitleStyle: {
    fontFamily: 'Montserrat',
  },
  headerBackTitle: null,
};

const cardStyle = {
  backgroundColor: '#f7f7f7',
};

const AuthStack = createStackNavigator(
  {
    login: Login,
  },
  {
    headerMode: 'none',
  },
);

const HomeStack = createStackNavigator(
  {
    home: {
      screen: Home,
      path: 'flavr/home',
      navigationOptions: () => ({
        title: 'FLAVR',
        ...headerOptions,
      }),
    },
  },
  {
    cardStyle,
  },
);

const CategoryListStack = createStackNavigator(
  {
    categorylist: {
      screen: CategoryList,
      path: 'flavr/categories',
      navigationOptions: () => ({
        title: 'CATEGORIES',
        ...headerOptions,
      }),
    },
    recipeList: {
      screen: RecipeList,
      path: 'flavr/category/:category',
      navigationOptions: ({navigation}) => ({
        title: getCategory(navigation.getParam('category')).toUpperCase(),
        ...headerOptions,
      }),
    },
  },
  {
    cardStyle,
  },
);

const SettingsStack = createStackNavigator(
  {
    settings: {
      screen: Settings,
      path: 'flavr/settings',
      navigationOptions: () => ({
        title: 'SETTINGS',
        ...headerOptions,
      }),
    },
  },
  {
    cardStyle,
  },
);

const FavoritesStack = createStackNavigator({
  favorites: {
    screen: RecipeList,
    path: 'flavr/favorites',
    navigationOptions: () => ({title: 'FAVORITES', ...headerOptions}),
  },
});

const TabNavigator = createBottomTabNavigator(
  {
    home: HomeStack,
    categorylist: CategoryListStack,
    favorites: FavoritesStack,
    settings: SettingsStack,
  },
  {
    tabBarComponent: props => (
      <BottomTabBar
        {...props}
        style={{
          shadowColor: '#000000',
          shadowOpacity: 0.5,
          shadowRadius: 10,
          shadowOffset: {
            height: -4,
            width: 0,
          },
          elevation: 10,
        }}
      />
    ),
    tabBarOptions: {
      showLabel: false,
      activeTintColor: '#FF8C2B',
      inactiveTintColor: '#979797',
    },
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({tintColor}) => {
        let icon = 'md-help-circle';
        const {routeName} = navigation.state;
        switch (routeName) {
          case 'home':
            icon = 'ios-home';
            break;
          case 'categorylist':
            icon = 'md-restaurant';
            break;
          case 'favorites':
            icon = 'ios-heart';
            break;
          case 'settings':
            icon = 'md-settings';
            break;
          default:
            icon = 'md-help-circle';
        }
        return <Icon name={icon} color={tintColor} size={24} />;
      },
    }),
  },
);

export default createAnimatedSwitchNavigator(
  {
    auth: AuthStack,
    app: TabNavigator,
  },
  {resetOnBlur: true},
);
