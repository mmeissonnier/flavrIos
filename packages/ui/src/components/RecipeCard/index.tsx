import React, {FC} from 'react';
import styled from 'styled-components/native';
import {RecipeCardProps} from './types';
import {LabelIcon} from '../LabelIcon';
import {Label} from '../Label';
import {Image} from 'react-native';

const Wrapper = styled.TouchableOpacity`
  background-color: white;
  border-radius: 4px;
  overflow: hidden;
  width: 100%;
`;

const Row = styled.View`
  flex-direction: row;
`;

const InfoWrapper = styled.View`
  padding: 0 20px 20px 20px;
`;

export const RecipeCard: FC<RecipeCardProps> = ({
  image,
  title,
  category,
  infos,
  onPress,
}) => (
  <Wrapper onPress={onPress}>
    <Image
      source={{uri: image}}
      style={{width: '100%', height: 128}}
      resizeMode="cover"
    />
    <InfoWrapper>
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
        size={20}
        transform="uppercase"
        margin="0 0 12px 0">
        {title}
      </Label>
      <Row>
        {infos.map(info => (
          <LabelIcon
            key={info.icon}
            icon={info.icon}
            font="Montserrat-Light"
            size={14}
            iconSize={15}
            color="#979797"
            transform="capitalize"
            margin="0 18px 0 0">
            {info.label}
          </LabelIcon>
        ))}
      </Row>
    </InfoWrapper>
  </Wrapper>
);
