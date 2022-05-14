import React from "react";
import { Helmet } from "react-helmet";
import useOrganizationSchema from "../hooks/useOrganizationSchema";
import useWebPageSchema from "../hooks/useWebPageSchema";

const OrganizationSchema = () => {
  const schema = useWebPageSchema({});
  delete schema["@graph"][1].breadcrumb;

  const organizarionSchema = useOrganizationSchema();

  return (
    <Helmet>
      <script type='application/ld+json'>
        {JSON.stringify({
          ...schema,
          ["@graph"]: [...schema["@graph"], organizarionSchema],
        })}
      </script>
    </Helmet>
  );
};

export default OrganizationSchema;
