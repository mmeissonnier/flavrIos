import { GestureResponderEvent } from 'react-native';
export declare type RecipeHeaderProps = {
    category: string;
    title: string;
    image: string;
    onPress: (event?: GestureResponderEvent) => void;
    infos: {
        icon: string;
        label: string;
    }[];
};
