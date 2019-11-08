import {
  AlignContentProperty,
  TextAlignProperty,
  TextTransformProperty,
} from 'csstype';

export type LabelProps = {
  font?: string;
  size?: number;
  color?: string;
  transform?: TextTransformProperty;
  padding?: string;
  margin?: string;
  align?: TextAlignProperty;
};
