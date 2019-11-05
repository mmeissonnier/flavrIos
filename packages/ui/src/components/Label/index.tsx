import {FC} from 'react';
import {LabelProps} from './types';
import styled from 'styled-components/native';
import {ViewProps} from 'react-native';

export const Label: FC<LabelProps & ViewProps> = styled.Text<LabelProps>`
  font-family: ${({font}) => (font ? font : 'Montserrat')};
  font-size: ${({size}) => (size ? size : 16)};
  color: ${({color}) => (color ? color : 'black')};
  background-color: transparent;
  padding: ${({padding}) => (padding ? padding : '0')}
  margin: ${({margin}) => (margin ? margin : '0')}
  text-transform: ${({transform}) => (transform ? transform : 'none')};
`;
