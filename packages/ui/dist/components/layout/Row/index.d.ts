import { FC } from 'react';
import { FlexAlignType, ViewProps } from 'react-native';
declare type Props = ViewProps & {
    flex?: string | number;
    justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
    alignItems?: FlexAlignType;
    pad?: string | number;
    marg?: string | number;
};
export declare const Row: FC<Props>;
export {};
