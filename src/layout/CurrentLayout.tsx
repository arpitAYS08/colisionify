'use client';
import React, { FunctionComponent, PropsWithChildren } from 'react';
import NavBarAndLayout from './NavBarAndLayout';
// import { useIsAuthenticated } from '@/hooks';
// import PrivateLayout from './PrivateLayout';
// import PublicLayout from './PublicLayout';

/**
 * Returns the current Layout component depending on different circumstances.
 * @layout CurrentLayout
 */
const CurrentLayout: FunctionComponent<PropsWithChildren> = (props) => {
//   return useIsAuthenticated() ? <PrivateLayout {...props} /> : <PublicLayout {...props} />;
return <NavBarAndLayout {...props}/>;
};

export default CurrentLayout;
