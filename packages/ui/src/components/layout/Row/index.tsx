import {FC} from 'react';
import styled from 'styled-components/native';
import {ViewStyle} from 'react-native';

export const Row: FC<ViewStyle> = styled.View<ViewStyle>`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex: ${({flex}) => (flex ? flex : '1')};
  justify-content: ${({justifyContent}) =>
    justifyContent ? justifyContent : 'flex-start'};
  align-items: ${({alignItems}) => (alignItems ? alignItems : 'flex-start')};
  padding: ${({padding}) => (padding ? padding : '0')};
`;
