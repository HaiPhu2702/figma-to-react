import { Box, Typography, Button } from "@mui/material";
import React from "react";
import css from "./css";
import Image from "../../assets/images/Logo.png";

const header = () => {
  return (
      <Box sx={css.wrapper}>
        <Box sx={css.container}>
          <Box sx={{ marginRight: "150px" }}>
            <img srcset={`${Image} 2x`} />
          </Box>

          <Box sx={css.Menu}>
            <Typography sx={css.listMenu}>About</Typography>
            <Typography sx={css.listMenu}>Features</Typography>
            <Typography sx={css.listMenu}>Pricing</Typography>
            <Typography sx={css.listMenu}>Testimonials</Typography>
            <Typography sx={css.listMenu}>Help</Typography>
          </Box>

          <Box sx={css.containerAuth}>
              <Typography sx={css.login}> Sign In</Typography>
              <Button variant="outlined" sx={css.register}> Sign Up</Button>
          </Box>
        </Box>
      </Box>
  );
};

export default header;
