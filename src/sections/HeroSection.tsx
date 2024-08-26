"use client";

import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";

import { motion } from "framer-motion";
import { step1, step2, step3, step4 } from "@/app/assets";

const data = [
  {
    image: step1.src,
    item1: "Key Features",
    item2: "kjadkjsldlkjaslkd sal",
    item3: "sjdkjs kjsd skj skjd ks dks jdks dks dks dks dksj dks dksj dkj skj !",
  },
  {
    image: step2.src,
    item1: "Key Features",
    item2: "lkajdjklj aslljalkjljasdlkj lkdsj",
    item3: "jhashj asjakn kajhsk kjaskhajks jkajhsjkksj jkakjjas kljlajs!",
  },
  {
    image: step3.src,
    item1: "Key Features",
    item2: "lorem akjdask kaj allkskad lksadkl k",
    item3: "kjhajdljsa n ajalk akl sks ns kjs lslk!",
  },
  {
    image: step4.src,
    item1: "Key Features",
    item2: "oiajdlas jdljalsjd ljkasd",
    item3: "jsk skjakjs skjkj ksjjksjk kjskj s!",
  },
];

const ease = [0.08, 0.37, 0.45, 0.002];

const HeroSection = () => {
  const [currentItemIndex, setCurrentItemIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentItemIndex((prevIndex) => (prevIndex < data.length - 1 ? prevIndex + 1 : 0));
    }, 5000); // Set interval to match animation duration

    return () => {
      clearInterval(interval);
    };
  }, [data]);

  console.log(currentItemIndex)
  return (
    <Box>
      <motion.div
        style={{
          width: "100%",
          gap: "20px",
          display: "flex",
          height: false ? "500px" : "600px",
          flexDirection: false ? "column" : "row",
        }}
        initial={{ opacity: 0 }} // Initial state
        animate={{ opacity: 1 }} // Visible state
        transition={{ duration: 1.5, ease }} // Transition settings
        key={currentItemIndex}>
        <div
          style={{
            width: false ? "100%" : "100%",
            display: "flex",
            justifyContent: false ? "flex-start" : "center",
            alignItems: "center",
          }}>
          {/* <motion.video
            src={'https://www.visme.co/wp-content/uploads/2024/04/fb-with-character-2.mp4'} // Access the 'src' property to get the image URL
            alt="image"
            style={{
              maxWidth: "100%",
              maxHeight: false ? "300px" : "90%",
            }}
            initial={{ opacity: 0, y: 20 }} // Initial animation state
            animate={{ opacity: 1, y: 0 }} // Animation when visible
            transition={{ duration: 1.5, ease }} // Transition settings
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
          /> */}
          <motion.img
            src={data[currentItemIndex].image} // Access the 'src' property to get the image URL
            alt="image"
            style={{
              maxWidth: "100%",
              maxHeight: false ? "300px" : "90%",
            }}
            initial={{ opacity: 0, y: 20 }} // Initial animation state
            animate={{ opacity: 1, y: 0 }} // Animation when visible
            transition={{ duration: 1.5, ease }} // Transition settings
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
          />
        </div>
        <div
          style={{
            width: false ? "90%" : "100%",
            margin: "auto",
            // backgroundColor:'red',
            display:'flex',
            flexDirection:'column',
            alignItems:'center'
          }}>
          <div
            style={{
              width: "100%",
              maxWidth: "400px",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}>
            <motion.h2
              initial={{ opacity: 0, y: -50 }} // Initial animation state
              animate={{ opacity: 1, y: 0 }} // Animation when visible
              transition={{ duration: 1.5, ease }} // Transition settings
              style={{fontSize:'1.8rem', fontWeight:650}}
            >
              {"Key Features"}
            </motion.h2>
            <motion.h1
              initial={{ opacity: 0, y: 20 }} // Initial animation state
              animate={{ opacity: 1, y: 0 }} // Animation when visible
              transition={{ duration: 1.5, ease }} // Transition settings
              style={{fontSize:'2rem', fontWeight:650}}
            >
              {data[currentItemIndex].item2}
            </motion.h1>
            <motion.h6
              initial={{ opacity: 0, y: 20 }} // Initial animation state
              animate={{ opacity: 1, y: 0 }} // Animation when visible
              transition={{ duration: 1.5, ease }} // Transition settings
              style={{fontSize:'1rem', fontWeight:500}}
            >
              {data[currentItemIndex].item3}
            </motion.h6>
          </div>
        </div>
      </motion.div>
    </Box>
  );
};


export default HeroSection;