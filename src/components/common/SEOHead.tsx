import React, { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title = "Yuvaparipalan Foundation | India's Youth Empowerment Movement",
  description = "Yuvaparipalan Foundation is India's largest youth empowerment movement dedicated to education, merit scholarships, AI literacy, women entrepreneurship, and preventive health.",
  canonicalUrl = "https://www.yuvaparipalan.org",
}) => {
  useEffect(() => {
    // Update document title
    document.title = title.includes('Yuvaparipalan') ? title : `${title} | Yuvaparipalan Foundation`;

    // Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // Inject JSON-LD Schema
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "NGO",
      "name": "Yuvaparipalan Foundation",
      "url": "https://www.yuvaparipalan.org",
      "logo": "https://www.yuvaparipalan.org/logo.png",
      "foundingDate": "2016",
      "founders": [
        {
          "@type": "Person",
          "name": "Biju A Sivanandan"
        }
      ],
      "address": [
        {
          "@type": "PostalAddress",
          "streetAddress": "Door no 5/430 D, Madappurachal, Manathana PO",
          "addressLocality": "Kannur",
          "addressRegion": "Kerala",
          "postalCode": "670674",
          "addressCountry": "IN"
        },
        {
          "@type": "PostalAddress",
          "streetAddress": "#3, Sri Mahalakshmi Garden, Saravanampatti",
          "addressLocality": "Coimbatore",
          "addressRegion": "Tamil Nadu",
          "postalCode": "641035",
          "addressCountry": "IN"
        }
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-9562858868",
        "contactType": "general inquiries",
        "email": "hello@yuvaparipalan.org"
      },
      "sameAs": [
        "https://www.yuvaparipalan.org"
      ]
    };

    let scriptTag = document.querySelector('#seo-json-ld');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'seo-json-ld';
      scriptTag.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(schemaData);
  }, [title, description, canonicalUrl]);

  return null;
};
