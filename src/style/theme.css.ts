import { createTheme } from '@vanilla-extract/css';
import { themeContract } from './themeContract';
export const myTheme = createTheme(themeContract, {
  color: { background: 'blue', foreground: 'white' },
});

export const myOtherTheme = createTheme(themeContract, {
  color: { background: 'yellow', foreground: 'black' },
});
