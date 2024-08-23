import { ThemeOptions } from '@mui/material';
import { PALETTE_COLORS } from './colors';
import { Nunito } from "next/font/google";

/**
 * MUI theme options for "Light Mode"
 */

const nunito = Nunito({
    weight: ["300", "400"],
    style: ["normal", "italic"],
    subsets: ["latin"],
  });

  

export const LIGHT_THEME: ThemeOptions = {
  palette: {
    mode: 'light',
    // background: {
    //   paper: '#f5f5f5', // Gray 100 - Background of "Paper" based component
    //   default: '#FFFFFF',
    // },
    text: {
        primary: '#001833', // Default color for primary text
        secondary: '#001833', // Default color for secondary text
      },
    ...PALETTE_COLORS,
  },
  typography: {
    fontSize: 16,
    fontFamily: nunito.style.fontFamily,
  },
  
  shape: {
    borderRadius: 8
  },
//   error: {
//     main: colors.red[500]
//   },
//   action: {
//     selected: '#FFF', 
//     hover: '#FAF9F6',
//   },
};

export default LIGHT_THEME;
