import React from "react";
import { Box, css } from "@mui/system";
import styled from "@emotion/styled";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
import { ProjectProps } from "../../types";
import ReactMarkdown from "react-markdown";
import ListSection from "../ui/ListSection";
import { Typography } from "@mui/material";

interface Props {
  data: ProjectProps;
}

const StyledListSectionBox = styled(Box)`
  margin-top: 25px;
  border: 1px;
  border-color: #e4e7ec;
  border-radius: 12px;
  background-color: #f8f8f8;
  & > p {
    padding: 20px 16px;
    padding-bottom: 0;
    font-weight: 500;
    font-size: 20px;
  }
  & > ul > li > div > p {
    padding-left: 16px;
    font-weight: 400;
    font-size: 14px;
    color: #000;
  }
`;

const ImageBox = styled(Box)(
  css({
    width: "100%",
    borderRadius: "16px",
    overflow: "hidden",
    marginTop: "25px",
  })
);

const StyledH2 = styled(Typography)(
  css({
    fontSize: ["24px", "28px"],
    fontWeight: "600",
    lineHeigth: "29px",
    marginTop: "24px",
  })
);

const StyledH3 = styled(Typography)(
  css({
    fontSize: ["20px", "22px"],
    fontWeight: "600",
    lineHeigth: "25px",
    marginTop: "20px",
  })
);

const StyledP = styled(Typography)(
  css({
    fontSize: ["16px", "18px"],
    fontWeight: "400",
    lineHeigth: "12px",
    marginTop: "16px",
  })
);

const StyledCode = styled(Box)(
  css({
    margin: "20px auto 20px auto",
    padding: "30px 0 30px 15px",
    borderRadius: "16px",
    background: "#4b4b4b",
    color: "#fff",
    overflowX: "auto",
    overflowY: "hidden",
  })
);

const ArticleBody = ({ data }: Props) => {
  const { titolo, body, copertina } = data;

  const image = getImage(copertina) as IGatsbyImageData;

  const headings = React.useMemo(() => {
    const array = body.childMarkdownRemark.headings.map((heading) => {
      return heading.value;
    });
    return array;
  }, []);

  return (
    <div>
      {image && (
        <ImageBox sx={{ heigth: { xs: "205px", lg: "405px" } }}>
          <GatsbyImage image={image} alt={titolo} />
        </ImageBox>
      )}
      <StyledListSectionBox>
        <ListSection
          title='Troverai nel progetto'
          list={headings}
          icon={<div></div>}
        ></ListSection>
      </StyledListSectionBox>
      <ReactMarkdown
        children={body.body}
        components={{
          h2: ({ node, ...props }) => <StyledH2 component='h2' {...props} />,
          h3: ({ node, ...props }) => <StyledH3 component='h3' {...props} />,
          p: ({ node, ...props }) => <StyledP component='p' {...props} />,
          code: StyledCode,
        }}
      />
    </div>
  );
};

export default ArticleBody;