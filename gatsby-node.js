const path = require(`path`);
const {
  allCourseQuery,
  allCourseCategory,
  allProjectArticle,
} = require("./query");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const singleCourseQuery = await graphql(allCourseQuery);
  const courseCategoryQuery = await graphql(allCourseCategory);
  const projectArticleQuery = await graphql(allProjectArticle);

  singleCourseQuery.data.allContentfulCorsi.nodes.forEach((node) => {
    createPage({
      path: node.slug,
      component: path.resolve(`./src/template/SingleCoursePage.tsx`),
      context: {
        slug: node.slug,
        categorySlug: node.category.filter(
          (category) => category.slug !== "gratuiti"
        )[0].slug,
      },
    });
  });

  courseCategoryQuery.data.allContentfulCategory.nodes.forEach((category) => {
    const {
      slug,
      name,
      description: { description },
      alias,
    } = category;
    createPage({
      path: `/corsi/${slug}/`,
      component: path.resolve("./src/template/Category.tsx"),
      context: {
        slug,
        name,
        alias,
        description,
      },
    });
  });

  projectArticleQuery.data.allContentfulProgetti.nodes.forEach((project) => {
    const courseSlug = project.project_category[0].slug;
    let slug = project.titolo;
    const reg = /\s/g;
    const regex = /[^a-zA-Z0-9-]/g;
    slug = slug.replace(reg, "-");
    slug = slug.replace(regex, "").toLowerCase();

    createPage({
      path: `/progetti/${courseSlug}/${slug}/`,
      component: path.resolve(`./src/template/ProjectArticle.tsx`),
      context: {
        id: project.id,
      },
    });
  });
};
