// import { AppBar, Button, Stack, Toolbar, Typography } from "@mui/material";
// import { coalitionifyLogo } from "@/app/assets";
// import React from "react";
// import Image from "next/image";
// import Link from "next/link";

// const Navbar = () => {
//   return (
//     <AppBar
//       position="fixed"
//       sx={{
//         top: "-1px",
//         padding: "0 24px",
//         left: 0,
//         right: 0,
//         backgroundColor: "rgba(255, 255, 255, 0.9)",
//         backdropFilter: "saturate(120%) blur(30px)",
//         boxShadow: "none",
//       }}>
//       <Toolbar
//         sx={{
//           height: 1,
//           px: { lg: 3 },
//         }}
//       >
//         <Stack direction={'row'} width={'100%'} justifyContent={'space-between'}>
//             <Image src={coalitionifyLogo} alt={'logo'} width={200}/>
//             <Stack flexGrow={1} alignItems={'center'} gap={10} direction={'row'} justifyContent={'center'}>
//                 {
//                     ['Home', 'Services', 'About', 'Pricing', 'Resourece'].map((item, index)=>(
//                         <Link href={'/'}>{item}</Link>
//                     ))
//                 }
//             </Stack>
//             <Stack>
//                 <Button variant="outlined">
//                     Login/Signup
//                 </Button>
//             </Stack>
//         </Stack>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navbar;


// import React, { useState } from 'react';
// import { AppBar, Toolbar, Typography, MenuItem, Menu, Button, Box, Stack } from '@mui/material';
// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import Link from 'next/link';
// import { coalitionifyLogo } from '@/app/assets';

// const Navbar = () => {
//   const [anchorEl, setAnchorEl] = useState(null);
//   const open = Boolean(anchorEl);

//   const handleMouseEnter = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMouseLeave = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <AppBar
//       position="fixed"
//       sx={{
//         top: 0,
//         left: 0,
//         right: 0,
//         backgroundColor: 'rgba(255, 255, 255, 0.9)',
//         backdropFilter: 'saturate(120%) blur(30px)',
//         boxShadow: 'none',
//       }}
//     >
//       <Toolbar>
//         <Stack
//           direction="row"
//           width="100%"
//           justifyContent="space-between"
//           alignItems="center"
//         >
//           <Image src={coalitionifyLogo} alt="logo" width={200} />
//           <Stack
//             flexGrow={1}
//             alignItems="center"
//             direction="row"
//             justifyContent="center"
//             gap={4}
//           >
//             <Link href="/">Home</Link>
//             <Typography
//               onMouseEnter={handleMouseEnter}
//               sx={{ cursor: 'pointer', position: 'relative' }}
//             >
//               Products
//             </Typography>
//             <Link href="/about">About</Link>
//             <Link href="/pricing">Pricing</Link>
//             <Link href="/resources">Resources</Link>
//           </Stack>
//           <Button variant="outlined">Login/Signup</Button>
//         </Stack>
//       </Toolbar>

//       {open && (
//         <motion.div
        //   initial={{ opacity: 0, y: -20 }}
        //   animate={{ opacity: 1, y: 0 }}
        //   exit={{ opacity: 0, y: -20 }}
        //   transition={{ duration: 0.3 }}
        //   onMouseLeave={handleMouseLeave}
        //   style={{
        //     position: 'absolute',
        //     top: '100%',
        //     left: 0,
        //     right: 0,
        //     backgroundColor: 'rgba(255, 255, 255, 0.9)',
        //     backdropFilter: 'saturate(120%) blur(30px)',
        //     padding: '20px 0',
        //     boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        //     zIndex: 1000,
//           }}
//         >
        //   <Box
        //     display="flex"
        //     justifyContent="space-around"
        //     px={4}
        //   >
//             <Box>
//               <Typography variant="h6">TOOLS</Typography>
//               <MenuItem>Product overview</MenuItem>
//               <MenuItem>Form builder</MenuItem>
//               <MenuItem>Survey maker</MenuItem>
//               <MenuItem>Quiz maker</MenuItem>
//             </Box>
//             <Box>
//               <Typography variant="h6">NEW</Typography>
//               <MenuItem>Typeform for Growth</MenuItem>
//               <MenuItem>Product updates</MenuItem>
//               <MenuItem>HubSpot for Typeform</MenuItem>
//             </Box>
        //     <Box>
        //       <Typography variant="h6">TEMPLATES</Typography>
        //       <Typography variant="body2">Free form, survey, and quiz templates</Typography>
        //       <Button sx={{ textTransform: 'none' }}>Choose one →</Button>
        //     </Box>
        //   </Box>
//         </motion.div>
//       )}
//     </AppBar>
//   );
// };

// export default Navbar;



import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { coalitionifyLogo } from '@/app/assets';


const menuItems = [
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

  const handleMouseEnter = (menuTitle) => {
    const selectedItem = menuItems.find(item => item.title === menuTitle);
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
            {menuItems.map((menuItem, index) => (
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
            {menuItems.find(menuItem => menuItem.title === activeDropdown)
              ?.dropdown.map((section, index) => (
                <Box key={index}>
                  <Typography variant="h6" mb={2}>{section.section}</Typography>
                  {section.items.map((item, idx) => (
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
