import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  twitterCard?: string;
  author?: string;
  structuredData?: Record<string, unknown>;
}

export const SEO: React.FC<SEOProps> = ({
  title = 'Tri Web Solution | Modern Web Development & Digital Agency',
  description = 'Tri Web Solution builds custom, high-converting websites, web applications, e-commerce platforms, and scalable digital solutions tailored for growing businesses.',
  keywords = 'web development agency, custom web development, React applications, SEO optimization, e-commerce solutions, UI UX design, Tri Web Solution',
  canonical = 'https://triwebsolution.com',
  ogType = 'website',
  ogImage = 'https://triwebsolution.com/og-image.jpg',
  twitterCard = 'summary_large_image',
  author = 'Tri Web Solution',
  structuredData,
}) => {
  const defaultOrganizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Tri Web Solution',
    url: 'https://triwebsolution.com',
    logo: 'https://triwebsolution.com/logo.png',
    image: 'https://triwebsolution.com/og-image.jpg',
    description:
      'High-performing web development, custom web applications, e-commerce, and digital transformation agency.',
    telephone: '+1-800-555-TRIWEB',
    priceRange: '$$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'San Francisco',
      addressRegion: 'CA',
      addressCountry: 'US',
    },
    sameAs: [
      'https://twitter.com/triwebsolution',
      'https://linkedin.com/company/triwebsolution',
      'https://github.com/triwebsolution',
    ],
  };

  const schemaToRender = structuredData || defaultOrganizationSchema;

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <link rel="canonical" href={canonical} />

      {/* OpenGraph Tags (Facebook, LinkedIn, iMessage, Discord) */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={title} />
      <meta property="og:site_name" content="Tri Web Solution" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:creator" content="@triwebsolution" />

      {/* JSON-LD Structured Data Schema */}
      <script type="application/ld+json">
        {JSON.stringify(schemaToRender)}
      </script>
    </Helmet>
  );
};
