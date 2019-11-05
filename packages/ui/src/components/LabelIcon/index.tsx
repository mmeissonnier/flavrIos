import React, {FC} from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {LabelIconProps} from './types';
import {Label} from '../Label';

const Row = styled.View<{m: string | undefined}>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: ${({m}) => (m ? m : '0')};
`;

export const LabelIcon: FC<LabelIconProps> = ({
  icon,
  color,
  font,
  size,
  margin,
  iconSize,
  transform,
  children,
}) => (
  <Row m={margin}>
    <Icon size={iconSize || size} name={icon} color={color} />
    <Label
      color={color}
      font={font}
      size={size}
      transform={transform}
      margin="0 0 0 8px">
      {children}
    </Label>
  </Row>
);
