import { PageCreationHelperProps } from "../../types"

export const freeCourseQuery = `
{
  allContentfulCorsi(
    filter: {isFree: {eq: true}}
  ) {
    nodes {
      slug
      id
       category {
        slug
      }
    }
  }
}
`
export type FreeCourseQueryProps = {
  data: {
    allContentfulCorsi: {
      nodes: Pick<
        Queries.ContentfulCorsiConnection["nodes"][number],
        "slug" | "id" | "category"
      >[]
    }
  }
}

type Props = {
  corsi: FreeCourseQueryProps["data"]["allContentfulCorsi"]["nodes"]
} & PageCreationHelperProps

export const createCoursePages = ({ corsi, createPage, component }: Props) => {
  corsi.forEach((corso) => {
    const { slug: categorySlug } =
      corso.category?.find((el) => el?.slug === `gratuiti`) || {}
    if (categorySlug)
      createPage({
        path: `/test/${corso.slug}/`,
        component,
        context: {
          id: corso.id,
          categorySlug,
        },
      })
  })
}
