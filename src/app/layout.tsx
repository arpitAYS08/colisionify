import { FunctionComponent, PropsWithChildren } from 'react';
import { Metadata, Viewport } from 'next';
import { SimplePaletteColorOptions } from '@mui/material';
// import { AppStoreProvider } from '@/store';
import defaultTheme, { ThemeProvider } from '@/theme';
// import CurrentLayout from '@/layout';
// import defaultTheme, { ThemeProvider } from '@/theme';
// import AppThemeProvider from '@/theme/ThemeProvider';
import './globals.css';
import CurrentLayout from '@/layout';

// const THEME_COLOR =  '#FFFFFF';
const THEME_COLOR = (defaultTheme.palette?.primary as SimplePaletteColorOptions)?.main || '#FFFFFF';

export const viewport: Viewport = {
  themeColor: THEME_COLOR,
};

export const metadata: Metadata = {
  title: 'Colisionify',
  description: 'Design | Build | Inspire',
  // manifest: '/site.webmanifest',
  // TODO: Add Open Graph metadata
};

const RootLayout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        {/* <AppStoreProvider> */}
          <ThemeProvider>
            <CurrentLayout>{children}</CurrentLayout>
          </ThemeProvider>
        {/* </AppStoreProvider> */}
      </body>
    </html>
  );
};

export default RootLayout;
