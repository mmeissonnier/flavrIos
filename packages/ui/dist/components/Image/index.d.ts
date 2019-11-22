import { FC, ComponentType } from 'react';
import { ImageSourcePropType, ImageResizeMode, ViewProps } from 'react-native';
export declare type ImageProps = ViewProps & {
    width: number | string;
    height: number | string;
    imageEmpty?: ComponentType;
    source: ImageSourcePropType;
    resizeMode?: ImageResizeMode;
};
export declare const Image: FC<ImageProps>;
