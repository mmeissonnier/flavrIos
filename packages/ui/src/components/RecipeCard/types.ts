import {GestureResponderEvent} from 'react-native';

export type RecipeCardProps = {
  category: string;
  title: string;
  image: string;
  infos: {icon: string; label: string}[];
  onPress?: (event: GestureResponderEvent) => void;
};
