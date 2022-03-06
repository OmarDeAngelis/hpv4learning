import React from "react";
import { Link } from "gatsby";
//Material UI
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import styled from "@emotion/styled";
import { CoursePreviewProps } from "../../types/course";
import CourseContent from "./CourseContent";

const StyledBox = styled(Box)`
  border-radius: 36px;
  overflow: hidden;
  & > *:not(:last-of-type) {
    border-bottom: 1px solid;
    border-bottom-color: var(--purple-200);
  }
  @media screen and (min-width: 768px) {
    display: flex;
    & > * {
      border-bottom: 0px !important;
      border-bottom-color: none !important;
      &:not(:nth-child(3)) {
        border-right: 1px solid;
        border-right-color: var(--purple-200);
      }
    }
  }
`;

type DataProps = CoursePreviewProps & { oreDiLezione: number; livello: string };

type Props = { data: DataProps[] } & (
  | { disableLink: true; slug?: never; title?: string; disableTitle?: boolean }
  | { disableTitle: true; title: never; slug?: string; disableLink?: boolean }
  | { disableLink?: true; disableTitle?: true; slug?: never; title?: never }
  | { title?: string; slug?: string; disableLink?: never; disableTitle?: never }
);

const CuorseSection = ({
  title,
  slug,
  disableLink,
  disableTitle,
  data,
}: Props) => {
  const handleHeaderJustify = () => {
    if (disableLink) {
      return "flex-start";
    }
    if (disableTitle) {
      return "flex-end";
    }
    return "space-between";
  };

  return (
    <Box>
      {!disableLink && !disableTitle && (
        <Stack direction='row' justifyContent={handleHeaderJustify()}>
          {!disableTitle && (
            <Typography
              fontWeight={500}
              sx={{
                fontSize: { xs: "18px", lg: "24px" },
              }}
            >
              {title || "Undefined"}
            </Typography>
          )}
          {!disableLink && (
            <Link to={`/corsi/${slug}/`} className='slug-default-style'>
              <Typography
                sx={{
                  fontSize: { xs: "14px", lg: "18px" },
                  color: "purple.400",
                }}
              >
                Vedi tutti
              </Typography>
            </Link>
          )}
        </Stack>
      )}

      <StyledBox
        sx={{
          mt: { xs: "14px", lg: "34px" },
          border: "1px solid",
          borderColor: "purple.200",
        }}
      >
        {data.map((el) => {
          return (
            <Box
              key={el.slug}
              sx={{
                maxWidth: { xs: "unset", lg: "382px" },
                px: { xs: "12px", lg: "64px" },
                py: { xs: "24px", lg: "51px" },
              }}
            >
              <CourseContent {...el} />
            </Box>
          );
        })}
      </StyledBox>
    </Box>
  );
};

export default CuorseSection;
