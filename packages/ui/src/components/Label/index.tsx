import {FC} from 'react';
import {ViewProps, TextProps} from 'react-native';
import styled from 'styled-components/native';
import {LabelProps} from './types';

export const Label: FC<LabelProps & TextProps> = styled.Text<LabelProps>`
  font-family: ${({font}) => (font ? font : 'Montserrat')};
  font-size: ${({size}) => (size ? size : 16)};
  color: ${({color}) => (color ? color : 'black')};
  background-color: transparent;
  padding: ${({padding}) => (padding ? padding : '0')}
  margin: ${({margin}) => (margin ? margin : '0')}
  text-align: ${({align}) => (align ? align : 'left')}
  text-transform: ${({transform}) => (transform ? transform : 'none')};
`;
