import { GestureResponderEvent } from 'react-native';
export declare type RecipeCardProps = {
    category: string;
    title: string;
    image: string;
    infos: {
        icon: string;
        label: string;
    }[];
    onPress?: (event: GestureResponderEvent) => void;
};
