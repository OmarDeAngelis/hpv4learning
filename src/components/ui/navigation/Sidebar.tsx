import React from "react";
//Material UI
import { makeStyles } from "@mui/styles";
import Container from "@mui/material/Container/Container";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
//Icon
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import HomeIcon from "@mui/icons-material/Home";
import SchoolIcon from "@mui/icons-material/School";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import CodeIcon from "@mui/icons-material/Code";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import BeenhereIcon from "@mui/icons-material/Beenhere";
//Gatsby
import { Link as GatsbyLink, graphql, useStaticQuery } from "gatsby";
//Global Context
import { useLayoutContext } from "../../../context/layout";
import { Box } from "@mui/system";
import { Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import useDropDown from "../../../hook/useDropDown";
import styled from "@emotion/styled";
import { CategoryMenuProps } from "../../../types/layout";

type Props = {
  allContentfulCategory: {
    nodes: CategoryMenuProps[];
  };
};

const useStyles = makeStyles(() => ({
  paper: {
    width: "100%",
  },
}));

const StyledDrawer = styled(SwipeableDrawer)`
  display: block;
  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

const Sidebar = () => {
  const classes = useStyles();
  const data: Props = useStaticQuery(query);
  const ctx = useLayoutContext();

  const { toggleMenu } = useDropDown(["corsi"]);

  const getIcon = React.useCallback((type: string) => {
    switch (type) {
      case "videomakers":
        return (
          <VideoCallIcon
            fontSize='small'
            sx={{
              color: "purple.400",
            }}
          />
        );
      case "sviluppatori-web":
        return (
          <CodeIcon
            fontSize='small'
            sx={{
              color: "purple.400",
            }}
          />
        );
      default:
        return (
          <BeenhereIcon
            fontSize='small'
            sx={{
              color: "purple.400",
            }}
          />
        );
    }
  }, []);
  return (
    <StyledDrawer
      anchor='left'
      open={ctx?.isSidebarOpen || false}
      onClose={() => null}
      onOpen={() => null}
      classes={{
        paper: classes.paper,
      }}
      sx={{
        width: "100%",
      }}
    >
      <Box height='72px' />
      <Container maxWidth='lg'>
        <Stack direction='row' justifyContent='flex-start'>
          <Box pt='24px'>
            <GatsbyLink to='/' onClick={ctx?.toggleSidebar}>
              <Box py='18px'>
                <Stack direction='row' spacing={2} alignItems='center'>
                  <HomeIcon
                    sx={{
                      color: "purple.400",
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: "1rem",
                      lineHeight: "unset",
                      fontWeight: 500,
                    }}
                    color='grey.800'
                  >
                    Home
                  </Typography>
                </Stack>
              </Box>
            </GatsbyLink>

            <Box py='18px'>
              <Stack
                direction='row'
                spacing={2}
                alignItems='center'
                onClick={() => toggleMenu("corsi")}
              >
                <SchoolIcon
                  sx={{
                    color: "purple.400",
                  }}
                />
                <Typography
                  sx={{
                    fontSize: "1rem",
                    lineHeight: "unset",
                    fontWeight: 500,
                  }}
                  color='gray.800'
                >
                  Corsi
                </Typography>
                <ExpandMoreIcon />
              </Stack>
              <Box id='corsi-menu' pt='18px' pl='8px'>
                {data.allContentfulCategory.nodes.map(({ name, slug }) => {
                  return (
                    <GatsbyLink
                      to={`/corsi/${slug}/`}
                      onClick={ctx?.toggleSidebar}
                      key={slug}
                    >
                      <Box py='18px'>
                        <Stack direction='row' spacing={2} alignItems='center'>
                          {getIcon(slug)}
                          <Typography
                            sx={{
                              fontSize: "1rem",
                              lineHeight: "unset",
                              fontWeight: 500,
                            }}
                            color='gray.800'
                          >
                            {name}
                          </Typography>
                        </Stack>
                      </Box>
                    </GatsbyLink>
                  );
                })}
              </Box>
            </Box>
            <GatsbyLink to='/' onClick={ctx?.toggleSidebar}>
              <Box py='18px'>
                <Stack direction='row' spacing={2} alignItems='center'>
                  <AssignmentIndIcon
                    sx={{
                      color: "purple.400",
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: "1rem",
                      lineHeight: "unset",
                      fontWeight: 500,
                    }}
                    color='grey.800'
                  >
                    Chi siamo
                  </Typography>
                </Stack>
              </Box>
            </GatsbyLink>
          </Box>
        </Stack>
      </Container>
    </StyledDrawer>
  );
};

const query = graphql`
  {
    allContentfulCategory {
      nodes {
        slug
        name
        seoDescription
        image {
          file {
            url
          }
        }
      }
    }
  }
`;

export default Sidebar;
