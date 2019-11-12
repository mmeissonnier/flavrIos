import React, {FC} from 'react';
import {Column, Row} from '../layout';
import {Image, TouchableWithoutFeedback, ImageBackground} from 'react-native';
import {Label} from '../Label';
import {LabelIcon} from '../LabelIcon';
import {RecipeHeaderProps} from './types';

export const RecipeDetailHeader: FC<RecipeHeaderProps> = ({
  image,
  title,
  category,
  infos,
  children,
  onPress,
}) => (
  <Column alignItems="center">
    <ImageBackground source={{uri: image}} style={{width: '100%', height: 192}}>
      <TouchableWithoutFeedback onPress={onPress}>
        {children}
      </TouchableWithoutFeedback>
    </ImageBackground>
    <Label
      color="#9E9E9E"
      font="Montserrat"
      size={13}
      transform="uppercase"
      margin="10px 0 6px 0">
      {category}
    </Label>
    <Label
      color="#333333"
      font="Montserrat-Medium"
      size={24}
      transform="uppercase"
      margin="0 0 18px 0">
      {title}
    </Label>
    <Row justifyContent="space-between" pad="0 20px" style={{width: '100%'}}>
      {infos.map(info => (
        <LabelIcon
          key={info.icon}
          icon={info.icon}
          font="Montserrat-Light"
          size={16}
          iconSize={18}
          color="#979797"
          transform="capitalize">
          {info.label}
        </LabelIcon>
      ))}
    </Row>
  </Column>
);
