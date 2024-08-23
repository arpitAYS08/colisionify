import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { coalitionifyLogo } from '@/app/assets';


const menuItems:any = [
    {
      title: 'Products',
      dropdown: [
        { section: 'TOOLS', items: ['Product overview', 'Form builder', 'Survey maker', 'Quiz maker'] },
        { section: 'NEW', items: ['Typeform for Growth', 'Product updates', 'HubSpot for Typeform'] },
      ],
    },
    {
      title: 'Services',
      dropdown: [
        { section: 'SUPPORT', items: ['Consulting', 'Customer Support', 'Training'] },
        { section: 'UPDATES', items: ['Service Improvements', 'Security Patches'] },
      ],
    },
    {
      title: 'Pricing',
      dropdown: null, // No dropdown for this item
    },
    {
      title: 'Resources',
      dropdown: [
        { section: 'BLOG', items: ['Latest Articles', 'Case Studies', 'Webinars'] },
      ],
    },
  ];
  

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleMouseEnter = (menuTitle:any) => {
    const selectedItem = menuItems.find((item:any) => item.title === menuTitle);
    if (selectedItem && selectedItem.dropdown) {
      setActiveDropdown(menuTitle);
    } else {
      setActiveDropdown(null);
    }
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'saturate(120%) blur(30px)',
        boxShadow: 'none',
        padding:' 0px 24px',
        height:'80px'
      }}
    >
      <Toolbar>
        <Stack
          direction="row"
          width="100%"
          justifyContent="space-between"
          alignItems="center"
        >
          <Image src={coalitionifyLogo} alt="logo" width={200} />
          <Stack
            flexGrow={1}
            alignItems="center"
            direction="row"
            justifyContent="center"
            gap={4}
          >
            {menuItems.map((menuItem:any, index:any) => (
              <Typography
                key={index}
                onMouseEnter={() => handleMouseEnter(menuItem.title)}
                sx={{ cursor: 'pointer', position: 'relative', fontSize:'1rem', lineHeight:'110%'}}
              >
                {menuItem.title}
              </Typography>
            ))}
          </Stack>
          <Button variant="contained" sx={{color:'white'}}>Login/Signup</Button>
        </Stack>
      </Toolbar>

      {activeDropdown && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          onMouseLeave={handleMouseLeave}
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'saturate(120%) blur(30px)',
            padding: '20px 0',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
            zIndex: 1000,
          }}
        >
          <Box
            display="flex"
            justifyContent="space-around"
            px={4}
          >
            {menuItems.find((menuItem:any) => menuItem.title === activeDropdown)
              ?.dropdown.map((section:any, index:any) => (
                <Box key={index}>
                  <Typography variant="h6" mb={2}>{section.section}</Typography>
                  {section.items.map((item:any, idx:any) => (
                    <Typography key={idx} variant='body2'>{item}</Typography>
                  ))}
                </Box>
              ))}
          </Box>
        </motion.div>
      )}
    </AppBar>
  );
};

export default Navbar;
