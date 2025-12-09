export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "XPharm",
    "alternateName": "XPharm Pharmaceutical Consultancy",
    "description": "Cross-functional pharmaceutical operations consultancy specializing in CMC, Quality, Supply Chain, Serialization, and Compliance.",
    "url": "https://xpharm.ie",
    "logo": "https://xpharm.ie/images/Logo1.png",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IE"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "email": "contact@xpharm.ie"
    },
    "sameAs": [
      "https://www.linkedin.com/company/xpharm/"
    ],
    "areaServed": {
      "@type": "Place",
      "name": "Global"
    },
    "serviceType": [
      "Pharmaceutical Consultancy",
      "CMC Technical Operations",
      "Quality Assurance",
      "Supply Chain Management",
      "Serialization Compliance",
      "Trade Compliance"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
