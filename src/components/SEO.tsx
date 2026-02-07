import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  schema?: object | object[];
}

const SEO = ({ title, description, schema }: SEOProps) => {
  const schemas = Array.isArray(schema) ? schema : schema ? [schema] : [];

  return (
    <Helmet>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {schemas.map((s, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;
