import { coalitionifyLogo } from '@/app/assets';
import { Box, Container, Grid, Typography, Link, Stack, useTheme, Divider, alpha } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const Footer = () => {
  const theme = useTheme();
  return (
    <Box sx={{ backgroundColor: alpha(theme.palette.primary.main,0.1), color: 'black', padding: '40px 0' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Left Section with Logo and Contact */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              Colisionify
            </Typography>
            {/* <Typography variant="body2" sx={{ marginTop: 2 }}>
              Open-source internal tool builder
            </Typography> */}
            <Link href="mailto:sales@appsmith.com" sx={{ display: 'block', marginTop: 2, color: 'inherit' }}>
              sales@colisionify.com
            </Link>
            <Image src={coalitionifyLogo} alt="logo" width={200} style={{marginTop:16, backgroundColor:'white'}}/>
          </Grid>

          {/* Use Cases Section */}
          <Grid item xs={6} md={2}>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
              USE CASES
            </Typography>
            <Stack spacing={1} sx={{ marginTop: 2 }}>
              <Link href="#" color="inherit">
                All use cases
              </Link>
              <Link href="#" color="inherit">
                Admin panels
              </Link>
              <Link href="#" color="inherit">
                Backoffice apps
              </Link>
              <Link href="#" color="inherit">
                CRUD frontends
              </Link>
              <Link href="#" color="inherit">
                Dashboards
              </Link>
              <Link href="#" color="inherit">
                Portals
              </Link>
              <Link href="#" color="inherit">
                Trackers
              </Link>
            </Stack>
          </Grid>

          {/* Templates Section */}
          <Grid item xs={6} md={2}>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
              TEMPLATES
            </Typography>
            <Stack spacing={1} sx={{ marginTop: 2 }}>
              <Link href="#" color="inherit">
                All templates
              </Link>
              <Link href="#" color="inherit">
                Customer support
              </Link>
              <Link href="#" color="inherit">
                Business analytics
              </Link>
              <Link href="#" color="inherit">
                Marketing portals
              </Link>
              <Link href="#" color="inherit">
                IT asset tracker
              </Link>
            </Stack>
          </Grid>

          {/* Developers Section */}
          <Grid item xs={6} md={2}>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
              DEVELOPERS
            </Typography>
            <Stack spacing={1} sx={{ marginTop: 2 }}>
              <Link href="#" color="inherit">
                Docs
              </Link>
              <Link href="#" color="inherit">
                GitHub
              </Link>
              <Link href="#" color="inherit">
                Product roadmap
              </Link>
              <Link href="#" color="inherit">
                Changelog
              </Link>
              <Link href="#" color="inherit">
                Status
              </Link>
              <Link href="#" color="inherit">
                Deployment options
              </Link>
            </Stack>
          </Grid>

          {/* Resources Section */}
          <Grid item xs={6} md={2}>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
              RESOURCES
            </Typography>
            <Stack spacing={1} sx={{ marginTop: 2 }}>
              <Link href="#" color="inherit">
                Support forum
              </Link>
              <Link href="#" color="inherit">
                Community
              </Link>
              <Link href="#" color="inherit">
                Blog
              </Link>
              <Link href="#" color="inherit">
                Tutorials
              </Link>
              <Link href="#" color="inherit">
                Customers
              </Link>
              <Link href="#" color="inherit">
                Security
              </Link>
            </Stack>
          </Grid>

          {/* Appsmith Section */}
          <Grid item xs={12} md={3}>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
            Colisionify
            </Typography>
            <Stack spacing={1} sx={{ marginTop: 2 }}>
              <Link href="#" color="inherit">
                About us
              </Link>
              <Link href="#" color="inherit">
                Careers
              </Link>
              <Link href="#" color="inherit">
                Become a partner
              </Link>
              <Link href="#" color="inherit">
                Become an affiliate
              </Link>
              <Link href="#" color="inherit">
                Privacy
              </Link>
              <Link href="#" color="inherit">
                Terms
              </Link>
            </Stack>
          </Grid>
        </Grid>

        {/* Bottom Section */}
        <Divider sx={{mt:4}}/>
        <Box sx={{ textAlign: 'center', marginTop: 4 }}>
          <Typography variant="body2" sx={{ marginBottom: 2 }}>
            © 2024 Colisionify, Inc. All rights reserved.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3 }}>
            <Link href="https://youtube.com" target="_blank" rel="noopener" color="inherit">
              <i className="fab fa-youtube" />
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener" color="inherit">
              <i className="fab fa-twitter" />
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener" color="inherit">
              <i className="fab fa-linkedin" />
            </Link>
            <Link href="https://discord.com" target="_blank" rel="noopener" color="inherit">
              <i className="fab fa-discord" />
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
