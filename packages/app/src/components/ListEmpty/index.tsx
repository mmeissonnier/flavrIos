import React, {FC} from 'react';
import {Logo, Label, Column} from '@flavr/ui';

export const ListEmpty: FC = () => (
  <Column alignItems="center" justifyContent="center">
    <Logo color="rgba(0,0,0,0.3)" />
    <Label
      align="center"
      size={20}
      color="#333333"
      margin="30px 0 0 0"
      font="Montserrat-Light">
      That's embarrasing.{'\n'}We found nothing, niet, nada, null...
    </Label>
  </Column>
);
