import { style } from '@vanilla-extract/css';
import { themeContract } from '../../style/themeContract.css';

export const counterStyle = style({
  border: 'none',
  background: themeContract.color.background,
  padding: 48,
});
