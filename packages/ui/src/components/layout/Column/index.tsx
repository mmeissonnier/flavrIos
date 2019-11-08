import {FC} from 'react';
import styled from 'styled-components/native';
import {ViewStyle} from 'react-native';

export const Column: FC<ViewStyle> = styled.View<ViewStyle>`
  display: flex;
  flex: ${({flex}) => (flex ? flex : '1')};
  justify-content: ${({justifyContent}) =>
    justifyContent ? justifyContent : 'flex-start'};
  align-items: ${({alignItems}) => (alignItems ? alignItems : 'flex-start')};
  padding: ${({padding}) => (padding ? padding : '0')};
`;
