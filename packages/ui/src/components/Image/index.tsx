import React, {FC, ComponentType} from 'react';
import styled from 'styled-components/native';
import {
  Image as RNImage,
  ImageStyle,
  ImageSourcePropType,
  ImageResizeMode,
  ViewProps,
} from 'react-native';
import {Column} from '../layout/Column';

export type ImageProps = ViewProps & {
  width: number | string;
  height: number | string;
  imageEmpty?: ComponentType;
  source: ImageSourcePropType;
  resizeMode?: ImageResizeMode;
};

export const Image: FC<ImageProps> = ({
  source,
  resizeMode,
  width,
  height,
  imageEmpty,
  style,
  testID,
}) => {
  const ImageEmpty = imageEmpty;
  return (
    <Column
      testID={testID}
      alignItems="center"
      justifyContent="center"
      style={[{width, height}, style]}>
      {ImageEmpty && <ImageEmpty />}
      <RNImage
        source={source}
        resizeMode={resizeMode}
        style={{width, height, position: 'absolute'}}
      />
    </Column>
  );
};
