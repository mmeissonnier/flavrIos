import { FC } from 'react';
import { ViewProps, GestureResponderEvent } from 'react-native';
export declare const Button: FC<ViewProps & {
    onPress?: (event: GestureResponderEvent) => void;
}>;
