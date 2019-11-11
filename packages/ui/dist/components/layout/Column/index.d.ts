import { FC } from 'react';
import { ViewProps, FlexAlignType } from 'react-native';
declare type Props = ViewProps & {
    flex?: string | number;
    justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
    alignItems?: FlexAlignType;
    pad?: string | number;
    marg?: string | number;
};
export declare const Column: FC<Props>;
export {};
