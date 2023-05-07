import { style } from '@vanilla-extract/css';
import { themeContract } from '../../style/themeContract';

export const boxStyle = style({
  background: themeContract.color.background,
  padding: 64,
});
