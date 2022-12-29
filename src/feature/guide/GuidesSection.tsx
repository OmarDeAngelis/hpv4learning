import React from "react"
import { IGatsbyImageData } from "gatsby-plugin-image"
import Typography from "@mui/material/Typography"
import Stack from "@mui/material/Stack"
import { GuideItem } from "./GuideItem"

type Props = {
  projects: Project[] | null
  courseSlug: string | null
}

export type Project = {
  articleTitle: string
  body: {
    childrenMarkdownRemark: {
      timeToRead: number
    }[]
  }
  copertina: {
    gatsbyImageData: IGatsbyImageData
  }
  descrizione: {
    descrizione: string
  }
  slug: string
}

export const GuidesSection = ({ projects, courseSlug }: Props) => (
  <Stack
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
    gap={[`16px`, `18px`]}
    mt="36px"
  >
    <Typography
      fontWeight={600}
      fontSize={[`34px`, `39px`]}
      lineHeight={[`39px`, `54px`]}
      textAlign="center"
    >
      Scopri le nostre mini guide
    </Typography>
    <Typography
      fontWeight={400}
      fontSize={[`18px`, `21px`]}
      lineHeight="29px"
      textAlign="center"
      maxWidth="756px"
    >
      Per chi volesse entrare nel dettaglio e seguire lezioni mirate abbiamo
      creato una serie di guide incrementali
    </Typography>
    {projects
      ? projects.map((project: Project) => (
          <GuideItem
            title={project.articleTitle}
            description={project.descrizione.descrizione}
            timeToRead={project.body.childrenMarkdownRemark[0].timeToRead}
            image={project.copertina.gatsbyImageData}
            alt={project.articleTitle}
            courseSlug={courseSlug}
            slug={project.slug}
          />
        ))
      : null}
  </Stack>
)
