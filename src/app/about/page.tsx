import { Stack, Typography } from '@mui/material';
import { NextPage } from 'next';
// import { AppButton, AppLink } from '@/components';

/**
 * Renders About Application page
 * @page About
 */
const AboutPage: NextPage = () => {
  return (
    <Stack spacing={2} padding={2}>
      <Stack>
        <Typography variant="h3">About application</Typography>
        <Typography variant="body1">
          Hello Arpit this side
          {/* <AppLink href="https://nextjs.org/docs/api-reference/create-next-app">Create Next App</AppLink> and{' '} */}
          {/* <AppLink href="https://mui.com/">MUI</AppLink> with set of reusable components and utilities to build */}
          {/* professional <AppLink href="https://nextjs.org/">NextJS</AppLink> application faster. The source code is */}
          {/* available on <AppLink href="https://github.com/karpolan/nextjs-mui-starter-ts">GitHub</AppLink>. */}
        </Typography>
        <Stack alignItems="center">
          {/* <AppButton color="secondary" href="https://github.com/karpolan/nextjs-mui-starter-ts"> */}
            {/* Open GitHub */}
          {/* </AppButton> */}
        </Stack>
      </Stack>
      <Stack>
        <Typography variant="h4">Reusable components</Typography>
        <Typography variant="body1">
          {/* Demo of reusable components is available on <AppLink to="/dev">DevTools page</AppLink> */}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default AboutPage;
