import React, {FC} from 'react';
import {View, Text, ViewStyle} from 'react-native';
import styled from 'styled-components/native';
import {Row} from '../layout/Row';
import {Label} from '../Label';
import {ListItemProps} from './types';

const Bullet = styled.View<ListItemProps>`
  min-width: 10px;
  min-height: 10px;
  background-color: #ff8c2b;
  border-radius: 20px;
  margin-right: 14px;
  align-items: center;
  justify-content: center;
  padding: ${({index}) => (index ? '2px' : 0)};
  margin-top: ${({index}) => (index ? 0 : '5px')};
`;

export const ListItem: FC<ListItemProps & ViewStyle> = ({
  children,
  index,
  color,
  margin,
}) => (
  <Row marg={margin}>
    <Bullet index={index}>
      {index !== undefined && (
        <Label
          size={11}
          align="center"
          style={{
            width: 13,
            height: 13,
            lineHeight: 13,
          }}
          color="white"
          font="Montserrat-Medium">
          {index}
        </Label>
      )}
    </Bullet>
    <Label size={16} color={color || 'black'} style={{flex: 1}}>
      {children}
    </Label>
  </Row>
);
