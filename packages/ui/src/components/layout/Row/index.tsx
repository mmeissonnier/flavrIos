import {FC} from 'react';
import styled from 'styled-components/native';
import {FlexAlignType, ViewProps} from 'react-native';

type Props = ViewProps & {
  flex?: string | number;
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  alignItems?: FlexAlignType;
  pad?: string | number;
  marg?: string | number;
};

export const Row: FC<Props> = styled.View<Props>`
  display: flex;
  flex-direction: row;
  flex: ${({flex}) => (flex ? flex : 'none')};
  justify-content: ${({justifyContent}) =>
    justifyContent ? justifyContent : 'flex-start'};
  align-items: ${({alignItems}) => (alignItems ? alignItems : 'flex-start')};
  padding: ${({pad}) => (pad ? pad : '0')};
  margin: ${({marg}) => (marg ? marg : '0')};
`;
