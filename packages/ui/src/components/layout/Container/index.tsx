import {FC} from 'react';
import styled from 'styled-components/native';
import {ViewStyle} from 'react-native';

type ContainerProps = {
  gutter: number;
};

export const Container: FC<ContainerProps> = styled.View<ContainerProps>`
  display: flex;
  flex: 1;
  padding: ${({gutter}) => `0 ${gutter}px`};
`;
