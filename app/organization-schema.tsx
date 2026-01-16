export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "XPharm",
    "alternateName": "XPharm Fractional Pharma Executives",
    "description":
      "XPharm provides fractional and interim pharmaceutical operations leadership, supporting life sciences companies with hands-on execution across supply chain, manufacturing, external partnerships, trade compliance, and operational scale-up during periods of growth, transition, or complexity.",
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
      "Fractional Operations Leadership",
      "Interim COO / Head of Operations",
      "Pharmaceutical Supply Chain Execution",
      "Manufacturing & External Network Management",
      "Trade Compliance & International Operations",
      "Operational Scale-Up and Transition Support"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
