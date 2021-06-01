import React from "react";
//Material Ui
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
//Gatsby
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const useStyles = makeStyles((theme) => ({
  image: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
}));

const Hero = ({ image, children, height }) => {
  const classes = useStyles();
  const gatsbyImage = image ? getImage(image) : false;
  return (
    <Box
      style={{
        minHeight: height || "auto",
      }}
    >
      <Grid container alignItems='center'>
        <Grid item xs={12} lg={6}>
          {children}
        </Grid>
        <Grid item xs={12} lg={6} className={classes.image}>
          <Box>{gatsbyImage && <GatsbyImage image={gatsbyImage} />}</Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;