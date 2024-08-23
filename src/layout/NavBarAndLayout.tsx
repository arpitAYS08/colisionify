'use client';

import { Container, Stack, StackProps } from '@mui/material';
import { FunctionComponent, useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

interface Props extends StackProps {
  // sidebarItems: Array<LinkToPage>;
  // title: string;
  // variant: 'sidebarAlwaysTemporary' | 'sidebarPersistentOnDesktop' | 'sidebarAlwaysPersistent';
}

const NavBarAndLayout: FunctionComponent<Props> = ({ children, title, ...props }) => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh', // Ensures the container takes up at least the full height of the viewport
        paddingLeft: '0px',
        paddingRight: '0px',
      }}
      // {...props}
    >
      <Stack component="header">
        <Navbar />
      </Stack>
      <Stack
        component="main"
        flexGrow={1} // Takes up remaining space to push the footer to the bottom
        justifyContent="space-between"
        // paddingLeft={1}
        // paddingRight={1}
        paddingTop="80px"
      >
        {children}
      </Stack>
      <Stack component="footer" sx={{ marginTop: 'auto' }}>
        <Footer />
      </Stack>
    </Container>
  );
};

export default NavBarAndLayout;
