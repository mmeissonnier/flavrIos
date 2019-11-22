import React, {FC} from 'react';
import {ViewProps, GestureResponderEvent} from 'react-native';
import Svg, {Defs, LinearGradient, Stop, Rect} from 'react-native-svg';
import styled from 'styled-components/native';

const ButtonContainer = styled.TouchableOpacity`
  justify-content: center;
  border-radius: 20px;
  overflow: hidden;
`;

export const Button: FC<ViewProps & {
  onPress?: (event: GestureResponderEvent) => void;
}> = ({children, style, onPress, testID}) => {
  return (
    <ButtonContainer style={style} onPress={onPress} testID={testID}>
      <Svg
        width="100%"
        height="100%"
        style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0}}>
        <Defs>
          <LinearGradient
            x1="5.67655342%"
            y1="50.8049907%"
            x2="103.849473%"
            y2="48.6205593%"
            id="grad">
            <Stop stopColor="#FF8C2B" offset="0%" />
            <Stop stopColor="#FF6322" offset="100%" />
          </LinearGradient>
        </Defs>
        <Rect width="100%" height="100%" fill="url(#grad)" />
      </Svg>
      {children}
    </ButtonContainer>
  );
};
