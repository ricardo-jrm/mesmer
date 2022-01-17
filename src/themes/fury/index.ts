import { ThemeOptions } from '@mui/material';
import { typography } from '../typography';
import { overrides } from '../overrides';

export const fury: ThemeOptions = {
  typography,
  palette: {
    primary: {
      dark: '#331606',
      main: '#701e0e',
      light: '#fefc7e',
    },
    secondary: {
      main: '#f63c1f',
    },
  },
  components: overrides,
};
