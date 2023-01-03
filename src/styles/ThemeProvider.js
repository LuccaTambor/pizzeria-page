import React, { Children } from 'react';
import { ThemeProvider as StyledProvider } from 'styled-components';


const theme = {
  colors: {
    primary: {
      main: '#2EDF74',
      dark: '#22A255',
      light: '#5DFA9B',
      text: '#212121'
    },
    danger: {
      main: '#E2243E',
      dark: '#B6031C',
      text: '#ffffff'
    }
  }
};

const ThemeProvider = ({ children }) => (
  <StyledProvider theme={theme}>
    {children}
  </StyledProvider>
)

export default ThemeProvider;
