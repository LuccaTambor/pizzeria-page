import { color } from '@storybook/addon-knobs';
import React, { Children } from 'react';
import { ThemeProvider as StyledProvider } from 'styled-components';

export const ThemeNames = {
  light: 'light',
  ocean: 'ocean'
}

const light = {
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
}

const allThemes = {
  light,
  ocean: {
    ...light,
    colors: {
      ...light.colors,
      primary: {
        main: '#21DAC1',
        dark: '#009D88',
        light: '#56F7E1',
        text: '#fff'
      }
    }
  }
};

const ThemeProvider = ({ theme,children }) => (
  <StyledProvider theme={allThemes[theme]}>
    {children}
  </StyledProvider>
)

ThemeProvider.defaultProps = {
  theme: 'light'
}

export default ThemeProvider;
