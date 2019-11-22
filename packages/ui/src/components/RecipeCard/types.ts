import {GestureResponderEvent} from 'react-native';
import {ComponentType} from 'react';

export type RecipeCardProps = {
  category: string;
  title: string;
  image: string;
  imageEmpty?: ComponentType;
  infos: {icon: string; label: string}[];
  onPress?: (event: GestureResponderEvent) => void;
};
