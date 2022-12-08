import React, { ComponentProps, useState } from 'react';
import { ThemeProvider, StyledEngineProvider } from '@mui/material';
import { themeCreator } from './base';
export type ThemeContextType = {
  themeName: String;
  changeTheme: (themeName: String) => void;
};
export const ThemeContext = React.createContext<ThemeContextType | null>(null);
interface ThemeProviderWrapperProps {
  children: React.ReactNode;
}

interface NewAnimatePresenceProps extends Omit<ThemeProviderWrapperProps, "children"> {
  children: React.ReactNode;
}

const ThemeProviderWrapper = ({ children }: { children: React.ReactNode }) => {
  const curThemeName = localStorage.getItem('appTheme') || 'PureLightTheme';
  const [themeName, _setThemeName] = useState(curThemeName);
  const theme = themeCreator(themeName);
  const setThemeName = (themeName: string): void => {
    localStorage.setItem('appTheme', themeName);
    _setThemeName(themeName);
  };

  return (
    <StyledEngineProvider injectFirst>
      <ThemeContext.Provider value={{ themeName: themeName, changeTheme: setThemeName }}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </ThemeContext.Provider>
    </StyledEngineProvider>
  );
};

export default ThemeProviderWrapper;
