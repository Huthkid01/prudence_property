import { contactInfo, siteConfig } from "../../data/content";

export default function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: siteConfig.name,
    description:
      "Professional residential and commercial property management services in Lagos, Nigeria.",
    url: siteConfig.url,
    email: contactInfo.email,
    telephone: contactInfo.phone.replace(/\s/g, ""),
    address: {
      "@type": "PostalAddress",
      streetAddress: "15 Ayangburen Road",
      addressLocality: "Ikorodu",
      addressRegion: "Lagos",
      addressCountry: "NG",
    },
    areaServed: {
      "@type": "City",
      name: "Lagos",
    },
    priceRange: "$$",
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
