import { Box, colors, Typography } from "@mui/material";
import React from "react";
import css from "./css";
import iconFacebook from "../../assets/images/Facebook.png";
import iconInstagram from "../../assets/images/Instagram.png";
import iconTwitter from "../../assets/images/Twitter.png";

import Logo from "../../assets/images/Logo.png";

const footer = () => {
  return (
    <Box sx={css.wrapper}>
      <Box sx={css.container}>
        <Box sx={css.halfContainer}>
          <Box>
            <img srcset={`${Logo} 2x`} />
          </Box>

          <Box sx={css.containerIntroduce}>
            <Typography sx={css.introduced1}>
              LaslesVPN
              <span sx={css.introduced2}>
                {" "}
                is a private virtual network that has unique features and has
                high security.
              </span>
            </Typography>
          </Box>

          <Box>
            <img srcset={`${iconFacebook} 2x`} width={"60px"} />
            <img srcset={`${iconInstagram} 2x`} width={"60px"} />
            <img srcset={`${iconTwitter} 2x`} width={"60px"} />
          </Box>

          <Box sx={css.containerIntroduce}>
            <Typography sx={css.introduced1}>
              ©2020Lasles<span sx={css.introduced2}>VPN</span>
            </Typography>
          </Box>
        </Box>

        <Box sx={css.halfContainer}>
          <Box sx={css.containerMenu}>
            <Box>
              <Box sx={css.titleMenu}>Product</Box>
              <Box sx={css.contentMenu}>Download </Box>
              <Box sx={css.contentMenu}>Pricing </Box>
              <Box sx={css.contentMenu}>Locations </Box>
              <Box sx={css.contentMenu}>Server </Box>
              <Box sx={css.contentMenu}>Countries </Box>
              <Box sx={css.contentMenu}>Blog </Box>
            </Box>

            <Box>
              <Box sx={css.titleMenu}>Engage</Box>
              <Box sx={css.contentMenu}>LaslesVPN?</Box>
              <Box sx={css.contentMenu}>FAQ </Box>
              <Box sx={css.contentMenu}>Tutorials </Box>
              <Box sx={css.contentMenu}>About Us </Box>
              <Box sx={css.contentMenu}>Privacy Policy </Box>
              <Box sx={css.contentMenu}>Terms of Service </Box>
            </Box>

            <Box>
              <Box sx={css.titleMenu}>Earn Money</Box>
              <Box sx={css.contentMenu}>Affiliate</Box>
              <Box sx={css.contentMenu}>Become Partner</Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default footer;
