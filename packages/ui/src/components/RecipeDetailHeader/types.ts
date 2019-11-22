import {GestureResponderEvent} from 'react-native';
import {ComponentType} from 'react';

export type RecipeHeaderProps = {
  category: string;
  title: string;
  image: string;
  imageEmpty?: ComponentType;
  testID?: string;
  onPress: (event?: GestureResponderEvent) => void;
  infos: {icon: string; label: string}[];
};
